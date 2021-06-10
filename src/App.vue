<template>
  <v-app>
    <!-- Navigation -->
    <v-navigation-drawer app v-model="drawer">
      <v-container>

        <v-list dense nav>
          <template v-for="list in navLists">
            <!-- 子のナビが無い時 -->
            <v-list-item v-if="!list.childs" :to="list.link" :key="list.name">
              <v-list-item-icon>
                <v-icon>{{ list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ list.name }}</v-list-item-title>
            </v-list-item>

            <!-- 子のナビがある時 -->
            <v-list-group v-else no-action :prepend-icon="list.icon" :key="list.name" v-model="list.active">
              <template v-slot:activator>
                <v-list-item-title>
                  {{ list.name }}
                </v-list-item-title>
              </template>

              <template v-for="child in list.childs">
                <v-list-item v-if="!child.posts" :to="child.link" :key="child.name">
                  <v-list-item-title>{{ child.name }}</v-list-item-title>
                </v-list-item>

                <v-list-group v-else sub-group :key="child.name">
                  <template v-slot:activator>
                    <v-list-item-title>
                      {{ child.name }}
                    </v-list-item-title>
                  </template>
                  <v-list-item v-for="post in child.posts" :key="post.title">
                    <router-link :to="post.link">
                      {{ post.title }}
                    </router-link>
                  </v-list-item>
                </v-list-group>

              </template>

            </v-list-group>
          </template>
        </v-list>

      </v-container>
    </v-navigation-drawer>
    <!-- End of Navigation -->

    <v-app-bar app :color="primaryColor">
      <v-app-bar-nav-icon @click="drawer=!drawer" color="#fff"></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-2">
        <router-link to="/" class="site-title">Vue製Wiki</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <v-footer app :color="primaryColor">
      <v-spacer></v-spacer>
      <small class="copyRight">© 2021 Vue製Wiki All rights reserved.</small>
    </v-footer>
  </v-app>
</template>

<script>
import 'normalize.css'
import navigation from '@/config/navigation.json'

export default {
  name: 'App',
  components: {
    // VueLoading
  },

  data () {
    return {
      primaryColor: '#3B4675',
      drawer: null,
      loading: true,
      result: [],
      navLists: navigation
    }
  },
  created () {
    console.log(navigation)
  },
  mounted () {
  }
}
</script>

<style>
.loading {
  position: absolute;
  top: 10%;
}
.site-title {
  color: #fff !important;
  text-decoration: none;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.copyRight {
  color: #fff;
}
</style>
