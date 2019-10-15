<template>
  <footer>
    <div class="container">
      <router-link
        class="logo-font"
        :to="{ name: 'home', params: {} }"
        v-text="'conduit'"
      />
      <span class="attribution">
        An interactive learning project from
        <a
          rel="noopener noreferrer"
          target="blank"
          href="https://thinkster.io"
          v-text="'Thinkster'"
        />
        . Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
