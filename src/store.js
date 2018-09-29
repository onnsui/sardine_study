import 'babel-polyfill'
import Vue from 'Vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categories: null
    // articles: null
  },
  mounted() {
    axios
      .get('https://sardine-system.com/media/wp-json/wp-api-menus/v2/menus/11')
      .then(response => (this.categories = response.data.items))
    axios
      .get('https://sardine-system.com/media/wp-json/wp/v2/posts?_embed')
      .then(response => (this.articles = response.data))
    axios
      .get('https://sardine-system.com/media/wp-json/wp/v2/posts?_embed')
      .then(response => (this.date = response.data.date))
  },
  getters: {
    categories(state) {
      return state.categories
    },
    articles(state) {
      return state.articles
    }
  }
})
export default store
