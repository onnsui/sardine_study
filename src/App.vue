<template>
  <header>
    <div class="header-top">
      <!-- <div class="conatainer"> -->
      <div class="header-top-left">
        <a href="index.html"><img src="./assets/logo_magagine_blue.1622261.svg" alt="logo"></a>
        <div class="divide"></div>
        <div class="header-top-left-text">人材紹介会社の<br>収益を拡大するメディア</div>
      </div>
      <div class="header-top-right">
        <input type="text" placeholder="記事を検索する" class="input search">
        <img src="./assets/icon_001470_256.99cf989.png" alt="search">
      </div>
      <!-- </div> -->
    </div>
  </header>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input {
  width: 98px;
  height: 14px;
  font-family: HiraKakuProN-W3;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #162949;
}
.header-top {
  height: 96px;
  display: flex;
}
.header-top :last-child {
  margin-left: auto;
}
/* .header-top {
} */
.header-top-left {
  display: flex;
}
.divide {
  width: 1px;
  height: 48px;
  background-color: #162949;
  margin: 0 24px 0 24px;
}
.search {
  width: 232px;
  height: 48px;
  border-radius: 24px;
  background-color: #f3f4f6;
  border: none;
  padding-left: 25px;
  position: relative;
}
.header-top-right img {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}
</style>
