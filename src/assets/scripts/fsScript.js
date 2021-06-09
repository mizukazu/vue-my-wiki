// const fs = require('fs')
const fo = require('./modules/fileOperation')
const glob = require('glob')
const dataPath = 'src/assets/data/post/'
const naviConfigPath = 'src/config/naviConfig.json'

const dataList = []
glob(`${dataPath}/**/*`, (err, files) => {
  files.forEach(data => {
    const dataSplit = data.split('/').splice(4, data.length)

    console.log(dataSplit)

    dataSplit.forEach((split, index) => {

    })
    // console.log('終了')

    dataList.push({
      fullPath: data
    })
  })
  // console.log(dataList)
  fo.writeFile(naviConfigPath, JSON.stringify(dataList, null, '\t'))
})

function isDir (data) {
  return !data.includes('.md')
}
