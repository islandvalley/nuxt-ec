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
  data() {
    return {
      searchWord: '',
      searchedWord: '',
      searching: false,
      items: []
    }
  },
  computed: {},
  methods: {
    async search() {
      console.log(this.searchWord)

      this.searchedWord = this.$store.state.searchWord
      this.$store.commit('updateSearchWord', '')


      // 検索中に当たる挙動
      this.items = []
      this.searching = true
      await setTimeout(() => {
        this.items = items
        this.searching = false
      }, 3000)
    }
  }
})

const items = [
  {
    name: 'item 1',
    description: '商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 2',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150x300'
  },
  {
    name: 'item 3タイトルがめっちゃ長くなってる',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/300x150'
  },
  {
    name: 'item 4',
    description: '商品の説明商品の説明',
    src: 'https://via.placeholder.com/200'
  },
  {
    name: 'item 5',
    description: '',
    src: ''
  },
  {
    name: 'item 6',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 7',
    description: '商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 8',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150x300'
  },
  {
    name: 'item 9タイトルがめっちゃ長くなってる',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/300x150'
  },
  {
    name: 'item 10',
    description: '商品の説明商品の説明',
    src: 'https://via.placeholder.com/200'
  },
  {
    name: 'item 11',
    description: '',
    src: ''
  },
  {
    name: 'item 12',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 13',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  }
]
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
  margin: 20px 0;
}
</style>
