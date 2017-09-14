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
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  props: ['comment']
}
</script>
