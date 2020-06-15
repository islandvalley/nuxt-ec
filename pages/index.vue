<template>
  <div>
    <Header ref="header" :search-button="search" />
    <main class="main">
      <div v-show="!searching">
        <h2>
          {{ searchedWord ? `${searchedWord}の検索結果${items.length}件` : '' }}
        </h2>
      </div>
      <div class="main-block">
        <SideList />
        <div>
          <p v-if="searching">検索中</p>
          <ul v-else class="list">
            <Item v-for="(item, index) in items" :key="index" :item="item" />
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideList from '../components/SideList'
import Item from '../components/Item'

export default Vue.extend({
  components: {
    Footer,
    Header,
    SideList,
    Item
  },
  computed: {
    searchWord() {
      return this.$store.state.search.searchWord
    },
    searchedWord() {
      return this.$store.state.search.searchedWord
    },
    searching() {
      return this.$store.state.search.searching
    },
    items() {
      return this.$store.state.search.items
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search/searchItems')
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.main-block {
  display: flex;
}

.main {
  margin: 20px;
  min-height: 80vh;
}

.list {
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
