<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <RwvListErrors :errors="errors" />
          <form @submit.prevent="onPublish(article.slug)">
            <fieldset :disabled="inProgress">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="article.title"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="article.description"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Write your article (in markdown)"
                >
                </textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagInput"
                  @keypress.enter.prevent="addTag(tagInput)"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) of article.tagList"
                    :key="tag + index"
                  >
                    <i class="ion-close-round" @click="removeTag(tag)"> </i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
            </fieldset>
            <button
              :disabled="inProgress"
              class="btn btn-lg pull-xs-right btn-primary"
              type="submit"
            >
              Publish Article
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import RwvListErrors from "@/components/ListErrors";
import {
  ARTICLE_PUBLISH,
  ARTICLE_EDIT,
  FETCH_ARTICLE,
  ARTICLE_EDIT_ADD_TAG,
  ARTICLE_EDIT_REMOVE_TAG,
  ARTICLE_RESET_STATE
} from "@/store/actions.type";
import { SET_ARTICLE as MUTATION_SET_ARTICLE } from "@/store/mutations.type";

const DRAFT_KEY_PREFIX = "article_draft_";

function getDraftKey(slug) {
  return DRAFT_KEY_PREFIX + (slug || "new");
}

function saveDraft(slug, article) {
  const key = getDraftKey(slug);
  const draft = {
    title: article.title || "",
    description: article.description || "",
    body: article.body || "",
    tagList: article.tagList || [],
    savedAt: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(draft));
}

function getDraft(slug) {
  const key = getDraftKey(slug);
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }
  return null;
}

function clearDraft(slug) {
  const key = getDraftKey(slug);
  localStorage.removeItem(key);
}

function hasContent(article) {
  return (
    (article.title && article.title.trim()) ||
    (article.description && article.description.trim()) ||
    (article.body && article.body.trim()) ||
    (article.tagList && article.tagList.length > 0)
  );
}

function isArticleEqual(a, b) {
  if (!a || !b) return a === b;
  return (
    (a.title || "") === (b.title || "") &&
    (a.description || "") === (b.description || "") &&
    (a.body || "") === (b.body || "") &&
    JSON.stringify(a.tagList || []) === JSON.stringify(b.tagList || [])
  );
}

export default {
  name: "RwvArticleEdit",
  components: { RwvListErrors },
  props: {
    previousArticle: {
      type: Object,
      required: false
    }
  },
  async beforeRouteUpdate(to, from, next) {
    const vm = this;
    const isEditing = to.params.slug !== undefined;
    const wasEditing = from.params.slug !== undefined;

    if (!isEditing && wasEditing) {
      const hasDraft = hasContent(vm.article);
      const isDirty = !isArticleEqual(vm.article, vm.initialArticle);

      if (hasDraft && isDirty) {
        const leaveConfirmed = confirm(
          "您有未保存的草稿，确定要离开吗？未保存的内容将会丢失。"
        );
        if (!leaveConfirmed) {
          return next(false);
        }
      }
    }

    await store.dispatch(ARTICLE_RESET_STATE);
    vm.initialArticle = null;
    vm.currentSlug = null;
    return next();
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      const slug = to.params.slug;
      vm.currentSlug = slug;

      if (slug !== undefined) {
        await store.dispatch(
          FETCH_ARTICLE,
          slug,
          to.params.previousArticle
        );
        vm.initialArticle = { ...vm.article };

        const draft = getDraft(slug);
        if (draft && hasContent(draft)) {
          const isNewerThanInitial = !isArticleEqual(draft, vm.initialArticle);
          if (isNewerThanInitial) {
            const restoreConfirmed = confirm(
              "检测到您有未保存的草稿，是否恢复上次编辑的内容？"
            );
            if (restoreConfirmed) {
              const restoredArticle = {
                ...vm.article,
                title: draft.title,
                description: draft.description,
                body: draft.body,
                tagList: draft.tagList
              };
              store.commit(MUTATION_SET_ARTICLE, restoredArticle);
            }
          }
        }
      } else {
        vm.initialArticle = {
          author: {},
          title: "",
          description: "",
          body: "",
          tagList: []
        };

        const draft = getDraft(null);
        if (draft && hasContent(draft)) {
          const restoreConfirmed = confirm(
            "检测到您有未保存的草稿，是否恢复上次编辑的内容？"
          );
          if (restoreConfirmed) {
            const restoredArticle = {
              ...vm.article,
              title: draft.title,
              description: draft.description,
              body: draft.body,
              tagList: draft.tagList
            };
            store.commit(MUTATION_SET_ARTICLE, restoredArticle);
          }
        }
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    const vm = this;

    if (vm.inProgress) {
      return next();
    }

    const hasDraft = hasContent(vm.article);
    const isDirty = !isArticleEqual(vm.article, vm.initialArticle);

    if (hasDraft && isDirty) {
      const leaveConfirmed = confirm(
        "您有未保存的草稿，确定要离开吗？草稿已自动保存在本地，下次回来可以恢复。"
      );
      if (leaveConfirmed) {
        saveDraft(vm.currentSlug, vm.article);
        return next();
      } else {
        return next(false);
      }
    }

    store.dispatch(ARTICLE_RESET_STATE);
    next();
  },
  data() {
    return {
      tagInput: null,
      inProgress: false,
      errors: {},
      currentSlug: null,
      initialArticle: null
    };
  },
  computed: {
    ...mapGetters(["article"])
  },
  watch: {
    article: {
      handler(newArticle) {
        if (this.initialArticle) {
          saveDraft(this.currentSlug, newArticle);
        }
      },
      deep: true
    }
  },
  created() {
    this.handleBeforeUnload = (e) => {
      const hasDraft = hasContent(this.article);
      const isDirty = !isArticleEqual(this.article, this.initialArticle);

      if (hasDraft && isDirty && !this.inProgress) {
        e.preventDefault();
        e.returnValue =
          "您有未保存的草稿，确定要离开吗？草稿已自动保存在本地。";
        return e.returnValue;
      }
    };
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },
  destroyed() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  methods: {
    onPublish(slug) {
      let action = slug ? ARTICLE_EDIT : ARTICLE_PUBLISH;
      this.inProgress = true;
      this.$store
        .dispatch(action)
        .then(({ data }) => {
          this.inProgress = false;

          const oldSlug = slug;
          const newSlug = data.article.slug;

          if (oldSlug) {
            clearDraft(oldSlug);
            if (newSlug && newSlug !== oldSlug) {
              clearDraft(newSlug);
            }
          } else {
            clearDraft(null);
            if (newSlug) {
              clearDraft(newSlug);
            }
          }

          this.$router.push({
            name: "article",
            params: { slug: newSlug }
          });
        })
        .catch(({ response }) => {
          this.inProgress = false;
          this.errors = response.data.errors;
        });
    },
    removeTag(tag) {
      this.$store.dispatch(ARTICLE_EDIT_REMOVE_TAG, tag);
    },
    addTag(tag) {
      this.$store.dispatch(ARTICLE_EDIT_ADD_TAG, tag);
      this.tagInput = null;
    }
  }
};
</script>
