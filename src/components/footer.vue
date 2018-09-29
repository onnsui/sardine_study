<template>
    <footer>
        <div class="footer-content">
            <div class="footer-category">
                <div class='footer-category-title'>カテゴリ一覧</div>
                <!-- フッターのカテゴリリストはv-forで取得する（暫定的に記述) -->
                <ul>
                    <li v-for="item in categories" v-bind:key="item.title">
                        {{item.title}}
                    </li>
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
</template>
<script>
export default {
  name: 'sardine-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
