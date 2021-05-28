<template>
  <v-app>
    <!-- Navigation -->
    <v-navigation-drawer app v-model="drawer">
      <v-container>
        <!-- <v-list-item-title class="title grey--text text--darken-2 center">サイト項目</v-list-item-title> -->
        <v-divider></v-divider>

        <v-list-item-title class="title grey--text text--darken-2 center">サイト項目</v-list-item-title>
        <v-divider></v-divider>

        <v-list dense nav>
          <template v-for="list in navLists">
            <v-list-item v-if="!list.lists" :to="list.link" :key="list.name">
              <v-list-item-icon>
                <v-icon>{{ list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group v-else no-action :prepend-icon="list.icon" :key="list.name" v-model="list.active">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ list.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="nestList in list.lists" :key="nestList.name" :to="nestList.link">
                <v-list-item-title>
                  {{ nestList.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>

      </v-container>
    </v-navigation-drawer>
    <!-- End of Navigation -->

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
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

    <v-footer app dark>
      <v-spacer></v-spacer>
      <small>© 2021 Vue製Wiki All rights reserved.</small>
    </v-footer>
  </v-app>
</template>

<script>
import 'normalize.css'
// import { VueLoading } from 'vue-loading-template'

export default {
  name: 'App',
  components: {
    // VueLoading
  },

  data () {
    return {
      drawer: null,
      loading: true,
      result: [],
      navLists: [
        {
          name: 'ホーム',
          icon: 'mdi-vuetify',
          link: '/'
        },
        {
          name: 'カテゴリー',
          icon: 'mdi-alphabetical-variant',
          active: true,
          link: '/category',
          lists: [
            { name: 'HTML', link: '/category/html' },
            { name: 'CSS', link: '/category/css' },
            { name: 'JS', link: '/category/js' },
            { name: 'php', link: '/category/php' }
          ]
        },
        {
          name: 'アーカイブ',
          icon: 'mdi-clock-outline',
          active: true,
          link: '/archive',
          lists: [
            { name: '2019/05', link: '/archive/201905' },
            { name: '2020/07', link: '/archive/202007' },
            { name: '2020/08', link: '/archive/202008' }
          ]
        }
      ]
    }
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
</style>
