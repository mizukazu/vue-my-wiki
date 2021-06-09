<template>
  <v-app>
    <v-container>
     <div v-html="convertMd()" />
    </v-container>
  </v-app>
</template>

<script>
import marked from 'marked'
import postData from '@/assets/data/post.json'

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
    console.log(this.$route.params)
    const postPath = `post/${this.$route.params.category}/${this.$route.params.name}`
    const data = postData.find(post => post.fullPath.includes(postPath))
    this.postContent = data.content
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
