<template>
  <v-app>
    <!-- Navigation -->
    <v-navigation-drawer app v-model="drawer">
      <v-container>

        <v-list dense nav>
          <template v-for="list in navLists2">
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
import navigation from '@/config/navigation.json'
// import dataUrl from '@/assets/data/post'
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
      navLists2: navigation,
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
          // link: '/category',
          childs: [
            {
              name: 'HTML',
              link: '/html',
              posts: [
                { title: 'test', link: '/post/test' },
                { title: 'sample', link: '/post/sample' },
                { title: 'テスト', link: '/post/hoge' },
                { title: 'サンプル', link: '/post/fuga' },
                { title: 'test2', link: '/post/test555' }
              ]
              // childs: [
              //   {
              //     name: 'HTML2',
              //     link: '/html2',
              //     posts: [
              //       { title: 'test', link: '/post/test' },
              //       { title: 'sample', link: '/post/test' }
              //     ]
              //   }
              // ]
            },
            {
              name: 'JS',
              link: '/js',
              posts: [
                { title: 'test', link: '/post/test' },
                { title: 'sample', link: '/post/test' },
                { title: 'テスト', link: '/post/test' }
              ]
            }
          ]
        }
        // {
        //   name: 'アーカイブ',
        //   icon: 'mdi-clock-outline',
        //   active: true,
        //   link: '/archive',
        //   lists: [
        //     { name: '2019/05', link: '/archive/201905' },
        //     { name: '2020/07', link: '/archive/202007' },
        //     { name: '2020/08', link: '/archive/202008' }
        //   ]
        // }
      ]
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
</style>
