# Firebaseメモ

node.jsからFirebaseの操作をするあれこれを書いていきます。

## Storage

### ファイルの取得

ストレージへの参照を作る(基本みんな同じ)

`const storage = firebase.storage;`

`const storageRef = storage.ref();`



ストレージの参照から取得したいファイルへの参照を作る

ストレージの下位ツリーにアクセスするにはchildメソッドを使う。

`const imageRef = storageRef.child('images/cat1.jpg');`



画像のURLを取得する。

非同期処理なのでasync,awaitやthenを使ってURLを取得する。

`imageRef.getDownloadURL().then(res => console.log(res));`



## Firestore

### データの取得

DBへの参照を作る

`const db = firebase.firestore();`

コレクションへの参照を作る

`const collectionRef = db.collection('users');`

データを取得する

非同期処理なのでasync,awaitやthenを使ってデータを取得する。

`collectionRef.get().then(res => console.log(res));`



