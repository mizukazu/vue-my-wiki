<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-bind:cols="col" sm="6" lg="4" v-for="post in postData" :key="post.title">
          <router-link :to="{ name:'post', params:{ name: post.title }}" class="card-link">
            <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-title>{{ post.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ post.date }}</v-card-subtitle>
            <v-card-subtitle class="pb-0">{{ post.category }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div></div>
            </v-card-text>
          </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import postData from '../assets/data/post.json'
export default {
  name: 'category',
  components: {
  },
  data () {
    return {
      col: '12',
      postData: []
    }
  },
  watch: {
    $route (to, from) {
      this.postData = []
      const test = postData.filter(x => {
        return this.$route.params.category === 'js' ? x.category === 'JavaScript' : x.category === this.$route.params.category.toUpperCase()
      })
      console.log(test)
      test.forEach(post => {
        this.postData.push(post)
      })
    }
  },
  created () {
    const test = postData.filter(x => {
      return this.$route.params.category === 'js' ? x.category === 'JavaScript' : x.category === this.$route.params.category.toUpperCase()
    })
    console.log(test)
    test.forEach(post => {
      this.postData.push(post)
    })
  }
}
</script>

<style lang="scss">
</style>
