---
sidebar_position: 3
---

# Load Data

このセクションでは、保存したデータを取得する方法を説明します。

CryptoShepherds Protocolでは、データ取得に`loadData`メソッドを使用します。

```javascript title="JavaScript"
cs.loadData('/path/to/folder', 'filename');
```

`loadData`メソッドは、**フォルダのパス**、取得するデータの**ファイル名**を引数に取り、データを取得します。

```javascript
'/path/to/folder'
```

```javascript
'filename'
```

[Save Data](./saveData)セクションで保存した`/myfamily/trip`フォルダに保存した`trip.jpg`というファイルを取得する場合、以下のように記述します。

```javascript 
cs.loadData('/myfamily/trip', 'trip.jpg');
```

返り値は、取得したデータです。

以下のようにすると、取得したデータを`data`という変数に格納することができます。

```javascript
const data = cs.loadData('/myfamily/trip', 'trip.jpg');
```

