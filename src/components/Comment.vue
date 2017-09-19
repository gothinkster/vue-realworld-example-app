<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{comment.body}}</p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="comment.author.image" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{comment.author.username}}</a>
      <span class="date-posted">{{comment.createdAt | date}}</span>
      <span class="mod-options">
        <i class="ion-edit"></i>
        <i class="ion-trash-a" v-on:click="destroy(slug, comment.id)"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { COMMENT_DESTROY } from '@/store/actions.type'

export default {
  name: 'comment',
  props: ['slug', 'comment'],
  methods: {
    destroy (slug, commentId) {
      this.$store.dispatch(COMMENT_DESTROY, { slug, commentId })
    }
  }
}
</script>
