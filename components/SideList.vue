<template>
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
</template>

<style lang="scss" scoped>
.side-list {
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 8px;
  width: 160px;
}
</style>
