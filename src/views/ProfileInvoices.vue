<template>
  <div class="profile-page">
    <div v-if="!isLoaded" class="article-preview">Loading invoices...</div>
    <table v-if="isLoaded" class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>type</th>
          <th>debit</th>
          <th>credit</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.id">
          <td>{{ invoice.id }}</td>
          <td>{{ invoice.type }}</td>
          <td>{{ invoice.debit }}</td>
          <td>{{ invoice.credit }}</td>
          <td>{{ invoice.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RwvArticleList from "@/components/ArticleList";
import store from "@/store";
import { FETCH_INVOICES } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "RwvProfileInvoices",
  components: {
    RwvArticleList
  },

  mounted() {
    store.dispatch(FETCH_INVOICES);
  },
  computed: {
    ...mapGetters(["invoices", "isLoaded"])
  }
};
</script>
