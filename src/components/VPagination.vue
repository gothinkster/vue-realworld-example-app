<template>
  <nav>
    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page"
        :class="paginationClass(page)"
        @click.prevent="changePage(page)"
      >
        <a class="page-link" href>{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage (goToPage) {
      if (goToPage === this.currentPage) return
      this.$emit('update:currentPage', goToPage)
    },
    paginationClass (page) {
      return {
        'page-item': true,
        active: this.currentPage === page
      }
    }
  }
}
</script>
