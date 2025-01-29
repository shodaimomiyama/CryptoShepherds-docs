---
sidebar_position: 2
---

# Save Data

このセクションでは、データを保存する方法を説明します。

CryptoShepherds Protocolでは、データ保存に`saveData`メソッドを使用します。

```javascript title="JavaScript"
cs.saveData('/path/to/folder', 'filename', data);
```

`saveData`メソッドは、**フォルダのパス**、保存するデータの**ファイル名**、保存する**データ**を引数に取り、データを保存します。

```javascript
'/path/to/folder'
```

```javascript
'filename'
```

```javascript
data
```

データを保存するフォルダは、`createFolder`メソッドで作成したフォルダである必要があります。


[Create Folder](./createFolder)セクションで作成した`/myfamily/trip`フォルダに、`trip.jpg`というファイル名で写真を保存する場合、以下のように記述します。

```javascript 
cs.saveData('/myfamily/trip', 'trip.jpg', data);
```

この場合、実際に`data`には画像データが入ります。

例えば、エンドユーザーが画像をアップロードする際、HTMLの`<input type="file">`を使用して画像を選択し、そのファイルを`FileReader`を使って読み込むことができます。以下はその例です。

```javascript 
const file = document.querySelector('input[type="file"]');
const reader = new FileReader();
reader.onload = (e) => {
  const data = e.target.result;
  cs.saveData('/myfamily/trip', 'trip.jpg', data);
};
file.addEventListener('change', () => {
  reader.readAsDataURL(file.files[0]);
});
```


