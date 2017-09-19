<template>
  <form class="card comment-form" v-on:submit="onSubmit(slug, comment)">
    <div class="card-block">
      <textarea
        class="form-control"
        v-model="comment"
        placeholder="Write a comment..."
        rows="3">
      </textarea>
    </div>
    <div class="card-footer">
      <img :src="userImage" class="comment-author-img" />
      <button class="btn btn-sm btn-primary"> Post Comment </button>
    </div>
  </form>
</template>

<script>
import { COMMENT_CREATE } from '@/store/actions.type'

export default {
  name: 'CommentEditor',
  props: ['slug', 'content', 'userImage'],
  data () {
    return {
      comment: this.content || ''
    }
  },
  methods: {
    onSubmit (slug, comment) {
      this.$store.dispatch(COMMENT_CREATE, { slug, comment })
    }
  }
}
</script>
