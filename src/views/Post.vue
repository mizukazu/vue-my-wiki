<template>
  <v-app>
    <v-container>
     <div v-html="convertMd()" />
    </v-container>
  </v-app>
</template>

<script>
import marked from 'marked'
import postData from '../assets/data/post.json'

export default {
  name: 'post',
  components: {
  },
  data () {
    return {
      col: '12',
      postContent: ''
    }
  },
  created () {
    this.postContent = postData.find(x => x.title === this.$route.params.name).content
    // const test = postData.find(x => x.title === this.$route.params.name).content
    // console.log(test)
  },
  methods: {
    convertMd () {
      return marked(this.postContent)
    }
  }
}
</script>

<style lang="scss">
</style>
