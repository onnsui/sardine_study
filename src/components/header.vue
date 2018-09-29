<template>
  <header>
    <div class="header-top">
      <div class="header-top-left">
        <a href="index.html"><img src="../assets/logo_magagine_blue.1622261.svg" alt="logo"></a>
        <div class="divide"></div>
        <div class="header-top-left-text">人材紹介会社の<br>収益を拡大するメディア</div>
      </div>
      <div class="header-top-right">
        <div class="search">
          <input type="text" placeholder="記事を検索する">
          <img src="../assets/icon_001470_256.99cf989.png" alt="search">
        </div>
      </div>
    </div>
    <div class="header-list">
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{category.title}}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'sardine-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
