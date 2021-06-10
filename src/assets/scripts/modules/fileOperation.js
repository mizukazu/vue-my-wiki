const fs = require('fs')

/**
 * ファイルを同期的に読み込む関数(fs.readFileSyncをラップしたもの)
 * @param { String } path
 * @return { String }
 */
exports.readFile = (path) => {
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
exports.writeFile = (path, data) => {
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
exports.getFileList = (dir) => {
  try {
    if (fs.statSync(dir)) {
      return fs.readdirSync(dir, 'utf8')
    }
  } catch (err) {
    console.log('ディレクトリが存在しません。')
    console.error(err.message)
  }
}
