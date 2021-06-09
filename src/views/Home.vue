<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          Vue製のWikiです。
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import postData from '../assets/data/post.json'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      col: '12',
      postData: postData
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
