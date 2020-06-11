<template>
  <div>
    <Header :search-input="searchWord" :search-button="search" />
    <main class="main">
      <div v-show="!searching">
        <h2>
          {{ searchedWord ? `${searchedWord}の検索結果${items.length}件` : '' }}
        </h2>
      </div>
      <div class="main-block">
        <div class="side-list-wrapper">
          <div class="side-list">
            <div>絞り込み</div>
            <ul>
              <li>
                <input id="t-thirt" type="checkbox" />
                <label for="t-thirt">Tシャツ</label>
              </li>
              <li>
                <input id="tops" type="checkbox" />
                <label for="tops">トップス</label>
              </li>
              <li>
                <input id="pants" type="checkbox" />
                <label for="pants">パンツ</label>
              </li>
              <li>
                <input id="shoes" type="checkbox" />
                <label for="shoes">靴</label>
              </li>
              <li>
                <input id="accesory" type="checkbox" />
                <label for="accesory">アクセサリ</label>
              </li>
            </ul>
          </div>
        </div>
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
import Item from '../components/Item'

export default Vue.extend({
  components: {
    Footer,
    Header,
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

      this.searchedWord = this.searchWord
      this.searchWord = ''

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

<style>
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

.links {
  padding-top: 15px;
}

.list {
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.item {
  padding: 12px;
  width: 25%;
}

.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.item-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.main-block {
  display: flex;
}

.side-list {
  border: 1px solid #bbb;
  border-radius: 8px;
  margin: 0 8px;
  padding: 8px;
  width: 160px;
}

/* side-listのsticky用の親要素 */
.side-list-wrapper {
  display: block;
}

.main {
  margin: 20px 0;
}

.item-link {
  text-decoration: none;
  color: #222;
}
</style>
