const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const marked = require('marked')
const postPath = './src/assets/data/post.json'
const postDirPath = './src/assets/data/post'

// ファイルの一覧を取得
const fileList = getFileList(postDirPath)

// 記事データから必要な情報を抽出
const postJson = []
fileList.forEach(file => {
  // markdown形式のファイルをHTMLに変換
  const data = marked(readFile(postDirPath + '/' + file))
  const dom = new JSDOM(data)
  const postDate = data.match(/(\d{4})\/(\d{2})\/(\d{2})/)[0]
  const postCategory = data.split('\n')[1].slice(3).slice(0, -4)
  const postTitle = dom.window.document.querySelector('h1').textContent
  postJson.push({
    date: postDate,
    title: postTitle,
    content: data,
    category: postCategory,
    fileName: file
  })
})

// 記事データのJSONを作成
writeFile(postPath, JSON.stringify(postJson, null, '\t'))

/**
 * ファイルを同期的に読み込む関数(fs.readFileSyncをラップしたもの)
 * @param { String } path
 * @return { String }
 */
function readFile (path) {
  try {
    if (fs.statSync(path)) {
      return fs.readFileSync(path, 'utf8')
    } else {
      console.log('ファイルが存在しません。')
    }
  } catch (err) {
    console.error(err.message)
  }
}

/**
 *
 * @param { String } path
 * @param { String } data
 */
function writeFile (path, data) {
  try {
    fs.writeFileSync(path, data)
    console.log('ファイルへの書き込みが完了しました。')
  } catch (err) {
    console.error(err.message)
  }
}

/**
 * 指定したディレクトリのファイル一覧を同期的に取得する関数(fs.readdirSyncをラップしたもの)
 * @param { String } dir
 * @return { String[] }
 */
function getFileList (dir) {
  try {
    if (fs.statSync(dir)) {
      return fs.readdirSync(dir, 'utf8')
    }
  } catch (err) {
    console.log('ディレクトリが存在しません。')
    console.error(err.message)
  }
}

// 後で非同期で実装するかも
// async function readFile(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   }
// )};
