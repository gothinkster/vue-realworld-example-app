<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="isAuth" class="nav-item">
                <router-link
                  :to="{name: 'home-my-feed'}"
                  class="nav-link"
                  active-class="active">
                  Your Feed
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{name: 'home'}"
                  exact
                  class="nav-link"
                  active-class="active">
                  Global Feed
                </router-link>
              </li>
              <li class="nav-item" v-if="tag">
                <router-link
                  :to="{name: 'home-tag', params: {tag}}"
                  class="nav-link"
                  active-class="active">
                  <i class="ion-pound"></i>
                  {{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <RwvTag
                v-for="(tag, index) in tags"
                :name="tag"
                :key="index">
              </RwvTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import RwvTag from '@/components/VTag'
  import { IS_AUTHENTICATED } from '@/store/getters.type'
  import { FETCH_TAGS } from '@/store/actions.type'

  export default {
    name: 'home',
    components: {
      RwvTag
    },
    mounted () {
      this.$store.dispatch(FETCH_TAGS)
    },
    computed: {
      ...mapGetters({
        isAuth: [IS_AUTHENTICATED]
      }),
      ...mapState({
        tags: state => state.home.tags
      }),
      tag () {
        return this.$route.params.tag
      }
    }
  }
</script>
