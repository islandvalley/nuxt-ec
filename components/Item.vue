<template>
  <li class="item">
    <nuxt-link to="product" class="item-link">
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
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
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

.item-link {
  text-decoration: none;
  color: #222;
}
</style>
