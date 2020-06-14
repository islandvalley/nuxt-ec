<template>
  <header class="header">
    <a href="/">
      <img src="https://via.placeholder.com/150x50?text=logo" alt="logo" />
    </a>
    <div class="search-box">
      <input
        :value="searchWord"
        type="text"
        class="search-box__input"
        @change="changeValue"
      />
      <button type="button" class="search-box__button" @click="searchButton">
        検索
      </button>
    </div>
    <div class="menu">
      menu
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    searchButton: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchWord: ''
    }
  },
  methods: {
    changeValue(event: Event) {
      const newValue = (event.target as HTMLInputElement).value
      this.$store.commit('search/updateSearchWord', newValue)
    }
  }
})
</script>

<style>
.header {
  align-items: center;
  height: 100px;
  background: #35495e;
  display: flex;
  justify-content: left;
  padding: 0 20px;
  position: relative;
}

.search-box {
  width: 600px;
  display: flex;
  margin: 0 12px;
}

.search-box__input {
  width: 100%;
}

.search-box__button {
  width: 100px;
}

.menu {
  position: absolute;
  right: 20px;
}
</style>
