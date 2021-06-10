<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>
            これはVue製のWikiもどきのサイトです。<br>
            Vueオンリーで動いています。
          </p>
          <p>
            主に技術についてのメモをここに残していきます。
          </p>
          <p>
            作成者: <a href="https://twitter.com/mizukazu_1" target="_blank">みずかず</a><br>
            ブログ: <a href="https://mizukazu.com" target="_blank">みずかず式！</a><br>
            <a href="https://github.com/mizukazu" target="_blank">Github</a>
          </p>
          <p>
            このサイトのソースコードは<a href="https://github.com/mizukazu/vue-my-wiki" target="_blank">こちら</a>で公開しています。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      col: '12'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.card-link {
  text-decoration: none;
}
</style>
