<template>
  <div class="container">
    <header>
      <div class="header-top">
        <div class="header-top-left">
          <a href="index.html"><img src="./assets/logo_magagine_blue.1622261.svg" alt="logo"></a>
          <div class="divide"></div>
          <div class="header-top-left-text">人材紹介会社の<br>収益を拡大するメディア</div>
        </div>
        <div class="header-top-right">
          <div class="search">
            <input type="text" placeholder="記事を検索する">
            <img src="./assets/icon_001470_256.99cf989.png" alt="search">
          </div>
        </div>
      </div>
      <div class="header-list">
        <!-- ヘッダーのカテゴリリストはv-forで取得する（暫定的に記述) -->
        <ul>
          <li>会社設立</li>
          <li>事業立ち上げ</li>
          <li>事業運営</li>
          <li>事業戦略</li>
          <li>求人獲得</li>
          <li>集客</li>
          <li>ノウハウ</li>
          <li>インタビュー</li>
          <li>導入事例</li>
        </ul>
      </div>
    </header>
    <div class="main-contents">
      <div class="main-left">
        <div class="article">
          <div class="article-wrapper">
            <div class="article-name">{{info}}</div>
            <div class="article-title">人財紹介会社を紹介する際の資金集めで注意すべきこと</div>
            <div class="article-contents">人財紹介会社を運営するためには・・・</div>
            <div class="article-date">
              <div class="date">2018/09/13</div>
              <div class="article-new">New</div>
            </div>
          </div>
          <div class="article-image"><img src="./assets/article.jpg" alt="logo"></div>
        </div>
        <div class="article">
          <div class="article-wrapper">
            <div class="article-name">事業立ち上げ</div>
            <div class="article-title">人財紹介会社を紹介する際の資金集めで注意すべきこと</div>
            <div class="article-contents">人財紹介会社を運営するためには・・・大変です色々</div>
            <div class="article-date">
              <div class="date">2018/09/13</div>
              <div class="article-new">New</div>
            </div>
          </div>
          <div class="article-image"><img src="./assets/article.jpg" alt="logo"></div>
        </div>
        <div class="article">
          <div class="article-wrapper">
            <div class="article-name">事業立ち上げ</div>
            <div class="article-title">人財紹介会社を紹介する際の資金集めで注意すべきこと</div>
            <div class="article-contents">人財紹介会社を運営するためには・・・大変です色々</div>
            <div class="article-date">
              <div class="date">2018/09/13</div>
              <div class="article-new">New</div>
            </div>
          </div>
          <div class="article-image"><img src="./assets/article.jpg" alt="logo"></div>
        </div>
        <div class="article">
          <div class="article-wrapper">
            <div class="article-name">事業立ち上げ</div>
            <div class="article-title">人財紹介会社を紹介する際の資金集めで注意すべきこと</div>
            <div class="article-contents">人財紹介会社を運営するためには・・・大変です色々</div>
            <div class="article-date">
              <div class="date">2018/09/13</div>
              <div class="article-new">New</div>
            </div>
          </div>
          <div class="article-image"><img src="./assets/article.jpg" alt="logo"></div>
        </div>
        <div class="article">
          <div class="article-wrapper">
            <div class="article-name">事業立ち上げ</div>
            <div class="article-title">人財紹介会社を紹介する際の資金集めで注意すべきこと</div>
            <div class="article-contents">人財紹介会社を運営するためには・・・大変です色々</div>
            <div class="article-date">
              <div class="date">2018/09/13</div>
              <div class="article-new">New</div>
            </div>
          </div>
          <div class="article-image"><img src="./assets/article.jpg" alt="logo"></div>
        </div>
        <div class="pagenation">
          <ul>
            <li>
              <i class="fas fa-chevron-left"></i>
            </li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>
              <i class="fas fa-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-right">
        <div class="mail-magazine-form">
          <div class="mail-magazine-content">
            <div class="mail-magazine-form-title">今すぐメルマガを登録する</div>
            <div class="mail-magazine-form-text">人材紹介会社の非公開ノウハウ情報など随時配信中！</div>
            <input type="text" placeholder="you@example.com">
            <button>送信</button>
          </div>
        </div>
        <div class="banner">
          <img src="./assets/LP-banner@2x.734a15e.jpg">
        </div>
        <div class="banner">
          <img src="./assets/lets_banner.4c4a66a.png">
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-content">
        <div class="footer-category">
          <div class='footer-category-title'>カテゴリ一覧</div>
          <!-- フッターのカテゴリリストはv-forで取得する（暫定的に記述) -->
          <ul>
            <li>会社設立</li>
            <li>事業立ち上げ</li>
            <li>事業運営</li>
            <li>事業戦略</li>
          </ul>
        </div>
        <div class="footer-category">
          <div class='footer-category-title'>SADINE人材紹介マガジンについて</div>
          <ul>
            <li>運営会社</li>
            <li>プライバシーポリシー</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        Copyright © SCOUTER, Inc. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    axios
      .get('https://sardine-system.com/media/wp-json/wp-api-menus/v2/menus/11')
      .then(response => (this.info = response.data.items[0].title))
  },
  data() {
    return {
      info: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body {
  margin: 0;
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
li {
  list-style-type: none;
}
ul {
  padding: 0;
}
header {
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
}
.header-top {
  height: 96px;
  display: flex;
  padding: 0 96px;
}
.header-top :last-child {
  margin-left: auto;
}
.header-top-left {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.header-top-left-text {
  width: 132px;
  height: 36px;
  font-family: HiraKakuProN-W6;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #162949;
}
.divide {
  width: 1px;
  height: 48px;
  background-color: #162949;
  margin: 0 24px 0 24px;
}

.header-top-right {
  display: flex;
  align-items: center;
}
.search {
  position: relative;
}
.search input {
  width: 232px;
  height: 48px;
  border-radius: 24px;
  background-color: #f3f4f6;
  border: none;
  padding-left: 25px;
  font-size: 14px;
}
.search img {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 16px;
  right: 24px;
  cursor: pointer;
}
.header-list {
  background-color: #162949;
  color: #fff;
  font-size: 14px;
  width: 100%;
  /* height: 40px; */
}
.header-list ul {
  display: flex;
  margin: 0 auto;
  padding: 0 96px;
  width: 1080px;
  align-items: center;
}
.header-list li {
  /* height: 14px; */
  font-family: HiraKakuProN-W6;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: normal;
  color: #ffffff;
  margin-right: 48px;
}
.main-contents {
  background-color: #f3f4f6;
  display: flex;
  padding-top: 136px;
  padding-bottom: 20px;
}
.main-left {
  background-color: #f3f4f6;
  width: 748px;
  padding: 40px 33px 0 100px;
}
.main-right {
  width: 300px;
  padding: 40px 100px 0 0;
}
.article {
  background-color: #fff;
  margin-bottom: 16px;
  display: flex;
}
.article-wrapper {
  padding: 38px 24px 27px 24px;
  position: relative;
}
.article-name {
  position: absolute;
  font-size: 12px;
  color: #162949;
  top: 0px;
  left: 24px;
  padding-top: 9px;
  border-top: 3px solid #182a4b;
  font-family: HiraKakuProN-W6;
  /* width: 96px; */
  height: 12px;
}
.article-title {
  width: 520px;
  height: 44px;
  font-family: HiraKakuProN-W6;
  font-size: 16px;
  line-height: 1.38;
  color: #333333;
  margin: 0px;
}
.article-contents {
  width: 520px;
  height: 44px;
  font-family: HiraKakuProN-W3;
  font-size: 12px;
  line-height: 1.5;
  color: #999999;
}
.date {
  display: inline-block;
  width: 81px;
  height: 12px;
  font-family: HiraKakuProN-W6;
  font-size: 12px;
  text-align: right;
  color: #999999;
}
.article-new {
  display: inline-block;
  font-family: Roboto;
  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  width: 45px;
  height: 16px;
  border-radius: 10px;
  background-color: #dc3339;
}
.article-image {
  width: 180px;
  height: 180px;
}
.article-image img {
  object-fit: cover;
  width: 180px;
  height: 180px;
}
.pagenation ul {
  display: flex;
  justify-content: center;
  padding: 0;
}
.pagenation li {
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #b9bfc9;
  border-collapse: collapse;
  margin-left: -1px;
}
.mail-magazine-form {
  background-image: url(./assets/stripe.e5dcce3.png);
  padding: 10.5px;
}
.mail-magazine-content {
  padding: 1.5rem;
  background-color: #f3f4f6;
}

.mail-magazine-form-title {
  margin: 0;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
  font-family: HiraKakuProN-W6;
  font-size: 16px;
  text-align: center;
  color: #333333;
}
.mail-magazine-form-text {
  font-family: HiraKakuProN-W3;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #333333;
  margin-top: 3px;
}
.mail-magazine-content input {
  width: 231px;
  height: 40px;
  border-radius: 4px;
  box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border: solid 1px #b9bfc9;
  font-size: 14px;
  text-align: center;
  margin-top: 18px;
}
.mail-magazine-content button {
  width: 231px;
  height: 40px;
  border-radius: 4px;
  background-color: #162949;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
}
.banner {
  margin-top: 40px;
}
.banner img {
  width: 300px;
  height: 250px;
}
footer {
  background-color: #f3f4f6;
  border-top: 1px solid #b9bfc9;
  padding-bottom: 44px;
}
.footer-content {
  padding: 48px 0 0 100px;
  display: flex;
}
.footer-category {
  width: 270px;
}
.footer-category-title {
  font-family: HiraKakuProN-W6;
  font-size: 14px;
  color: #999999;
}
.footer-category li {
  padding-top: 16px;
  font-size: 14px;
  color: #333;
}
.copyright {
  font-size: 14px;
  padding: 48px 0 0 100px;
  color: #999;
}
</style>
