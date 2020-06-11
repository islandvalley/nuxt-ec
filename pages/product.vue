<template>
  <div>
    <Header :search-input="searchWord" :search-button="search" />
    <p>商品ページ</p>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default Vue.extend({
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchWord: '',
      search() {
        console.log('hello')
      }
    }
  }
})
</script>
