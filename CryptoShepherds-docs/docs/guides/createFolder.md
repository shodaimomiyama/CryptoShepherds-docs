---
sidebar_position: 1
---

# Create Folder

このセクションでは、フォルダを作成する方法を説明します。

CryptoShepherds Protocolでは、フォルダ作成に`createFolder`メソッドを使用します。

```javascript title="JavaScript"
cs.createFolder('/path/to/folder');
```

`createFolder`メソッドは、フォルダのパスを引数に取り、フォルダを作成します。

```javascript 
'/path/to/folder'
```

`/`は、フォルダの区切り文字です。

フォルダ名には、`/`を含めることはできません。

例えば、家族の旅行に行ったときの写真を保存するフォルダを作成する場合、`/myfamily/trip`というパスを指定します。

```javascript
cs.createFolder('/myfamily/trip');
```

これにより、ルートのフォルダに`/myfamily`、その中に`/trip`というフォルダが作成されます。

ユーザーはデータを保存する前に、必ずフォルダを作成する必要があります。
