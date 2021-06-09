const fs = require('fs')
const glob = require('glob')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const marked = require('marked')
const postPath = 'src/assets/data/post.json'
const postDirPath = 'src/assets/data/post'
const fo = require('./modules/fileOperation')

// ファイルの一覧を取得
const fileList = fo.getFileList(postDirPath).filter(file => { return file.includes('.md') })

console.log(fileList)

// 記事データから必要な情報を抽出
const postJson = []

glob(`${postDirPath}/**/*`, (err, files) => {
  const category = []
  files.forEach(file => {
    // const split = file.split('/').pop()
    if (!file.split('/').pop().includes('.md')) {
      category.push(file.split('/').pop())
    }
    const data = file.includes('.md') ? marked(fo.readFile(file)) : ''
    console.log(data)
    postJson.push({
      content: data,
      fullPath: file
    })
  })
  // 記事データのJSONを作成
  fo.writeFile(postPath, JSON.stringify(postJson, null, '\t'))
  console.log(postJson)
})

// fileList.forEach(file => {
//   // markdown形式のファイルをHTMLに変換
//   const data = marked(fo.readFile(postDirPath + '/' + file))
//   const dom = new JSDOM(data)
//   const postDate = data.match(/(\d{4})\/(\d{2})\/(\d{2})/)[0]
//   const postCategory = data.split('\n')[1].slice(3).slice(0, -4)
//   const postTitle = dom.window.document.querySelector('h1').textContent
//   postJson.push({
//     date: postDate,
//     title: postTitle,
//     content: data,
//     category: postCategory,
//     fileName: file
//   })
// })
