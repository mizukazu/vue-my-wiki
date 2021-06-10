const fs = require('fs')
const glob = require('glob')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const marked = require('marked')
const postPath = 'src/assets/data/post.json'
const postDirPath = 'src/assets/data/post'
const navigationPath = 'src/config/navigation.json'
const fo = require('./modules/fileOperation')

// ファイルの一覧を取得
// const fileList = fo.getFileList(postDirPath).filter(file => { return file.includes('.md') })
// console.log(fileList)
const navigation = JSON.parse(fo.readFile(navigationPath))

// 記事データから必要な情報を抽出
const postJson = []
const category = []
glob(`${postDirPath}/**/*`, (err, files) => {
  files.forEach(file => {
    if (!file.split('/').pop().includes('.md')) {
      category.push(file.split('/').pop())
    } else {
      const data = file.includes('.md') ? marked(fo.readFile(file)) : ''
      const title = file.split('/').pop().split('.')[0]
      const postCategory = file.split('/')[4].toUpperCase()
      console.log(data)
      postJson.push({
        title: title,
        category: postCategory,
        content: data,
        fullPath: file
      })
    }
  })
  category.forEach(cat => {
    navigation[1].childs.forEach(child => {
    // console.log(cat.toUpperCase(), child.name)
      if (child.name.includes(cat.toUpperCase())) {
        child.posts = []
      }
    })
  })
  postJson.forEach(post => {
    const p = navigation[1].childs.find(category => category.name.includes(post.category))
    console.log(p)
    // const p = navigation[1].childs.find(category => category.name.localeCompare(post.category))
    const navPost = {
      title: post.title,
      link: `/${post.category.toLowerCase()}/${post.title}`
    }
    // console.log(`navpost:${navPost.link}`)
    p.posts.push(navPost)
  })

  // 記事データのJSONを作成
  fo.writeFile(postPath, JSON.stringify(postJson, null, '\t'))
  fo.writeFile(navigationPath, JSON.stringify(navigation, null, '\t'))
  // console.log(category)
})
