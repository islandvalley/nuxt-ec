<template>
  <header class="header">
    <div>Logo</div>
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
    <div>
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
      this.$store.commit('updateSearchWord', newValue)
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
  justify-content: space-between;
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
