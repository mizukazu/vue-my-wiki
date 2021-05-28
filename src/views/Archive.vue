<template>
  <v-app>
    <v-container>
       <v-row>
        <v-col v-bind:cols="col" sm="6" lg="4" v-for="(post, index) in postData" :key="index">
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
  name: 'archive',
  components: {
    // Test
  },
  data () {
    return {
      col: '12',
      postData: postData
    }
  },
  created () {
    this.postData = postData.filter(x => {
      let postDataDate = new Date(x.date)
      postDataDate = postDataDate.getFullYear() + '/' + (postDataDate.getMonth() + 1)
      let paramDate = new Date(this.insertSlash(this.$route.params.archive))
      paramDate = paramDate.getFullYear() + '/' + (paramDate.getMonth() + 1)
      return postDataDate === paramDate
    })
  },
  methods: {
    insertSlash (date) {
      const slash = '/'
      return date.slice(0, 4) + slash + date.slice(4)
    }
  }
}
</script>

<style lang="scss">
</style>
