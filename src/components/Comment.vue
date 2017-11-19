<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="comment.author.image" class="comment-author-img">
      </a>
      <router-link class="comment-author" :to="{ name: 'profile', params: { username: comment.author.username } }">
        {{ comment.author.username }}
      </router-link>
      <span class="date-posted">{{ comment.createdAt | date }}</span>
      <span v-if="isCurrentUser" class="mod-options">
        <i class="ion-trash-a" v-on:click="destroy(slug, comment.id)"></i>
      </span>
    </div>
  </div>
</template>
<script>
  import { COMMENT_DESTROY } from '@/store/actions.type'
  import { GET_CURRENT_USER } from '@/store/getters.type'

  export default {
    name: 'RwvComment',
    props: {
      slug: { type: String, required: true },
      comment: { type: Object, required: true }
    },
    computed: {
      isCurrentUser () {
        const user = this.$store.getters[GET_CURRENT_USER]
        if (user.username && this.comment.author.username) {
          return this.comment.author.username === user.username
        }
        return false
      }
    },
    methods: {
      destroy (slug, commentId) {
        this.$store.dispatch(COMMENT_DESTROY, { slug, commentId })
      }
    }
  }
</script>
