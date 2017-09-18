<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text"
                  v-model="image"
                  placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text"
                  v-model="name"
                  placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8"
                  v-model="bio"
                  placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text"
                  v-model="email"
                  placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password"
                  v-model="password"
                  placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
          </form>
          <!-- Line break for logout button -->
          <hr>
          <button v-on:click="logout" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { LOGOUT } from '@/store/actions.type'

export default {
  name: 'settings',
  data () {
    let user = this.$store.state.auth.user
    return {
      name: user.username,
      email: user.email,
      image: null,
      bio: null,
      password: null
    }
  },
  methods: {
    logout () {
      this.$store
        .dispatch(LOGOUT)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>
