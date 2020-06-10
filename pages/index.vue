<template>
  <div>
    <header class="header">
      <div>Logo</div>
      <div class="search-box">
        <input v-model="searchWord" type="text" class="search-box__input" />
        <button type="button" class="search-box__button" @click="search">
          検索
        </button>
      </div>
      <div>
        menu
      </div>
    </header>
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
            <li v-for="(item, index) in items" :key="index" class="item">
              <h4 class="item-title">{{ item.name }}</h4>
              <img
                :src="
                  item.src.length > 0
                    ? item.src
                    : 'https://via.placeholder.com/150?text=No+Image'
                "
                alt="画像"
                class="item-image"
              />
              <p v-show="!!item.description" class="item-description">
                {{ item.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer class="footer">
      <small>Copy Write</small>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

.header {
  align-items: center;
  height: 100px;
  background: #35495e;
  display: flex;
  justify-content: space-between;
}

.footer {
  height: 100px;
  background: #35495e;
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

.search-box {
  width: 600px;
  display: flex;
}

.search-box__input {
  width: 100%;
}

.search-box__button {
  width: 100px;
}
</style>
