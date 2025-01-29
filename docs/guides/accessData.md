---
sidebar_position: 6
---

# Access Data

このセクションでは、共有されたデータへのアクセス方法について説明します。

CryptoShepherds Protocolでは、共有されたデータへのアクセスに`accessData`メソッドを使用します。

```javascript title="JavaScript"
cs.accessData('/path/to/folder', 'filename');
```

`accessData`メソッドは、**アクセスするデータのパス**と**ファイル名**を引数に取り、データを取得します。

```javascript
'/path/to/folder'
```

```javascript
'filename'
```

ここで、`accessData`メソッドを使用すると、必ず指定したデータにアクセスできるわけではないことに注意してください。

`accessData`メソッドを実行したユーザーが、指定したデータにアクセスできるかどうかは、`setShareFolder`メソッドや`setShareData`メソッドで設定した復号条件が満たされるかによって決定されます。

例えば、`setShareFolder`メソッドで設定した復号条件が、ユーザーのウォレットが0.000001 ETH以上を持つ条件である場合、`accessData`メソッドを実行したユーザーが、0.000001 ETH以上を持つ場合に指定したデータにアクセスできるようになります。

また、`setShareData`メソッドで設定した復号条件が、気温が40度未満の場合にtrueを返す条件である場合、ユーザーが`accessData`メソッドを実行した際に、気温が40度未満の場合に指定したデータにアクセスできるようになります。

`myfamily/trip`フォルダに保存された`trip.jpg`ファイルにアクセスする場合、以下のように記述します。

```javascript 
cs.accessData('/myfamily/trip', 'trip.jpg');
```

この場合、`accessData`メソッドを実行したユーザーが、`/myfamily/trip`フォルダに保存された`trip.jpg`ファイルにアクセスできるかどうかは、`setShareFolder`メソッドや`setShareData`メソッドで設定した復号条件が満たされるかによって決定されます。

返り値は、共有された`data`です。

以下のようにすると、アクセスしたデータを`data`という変数に格納することができます。

```javascript
const data = cs.accessData('/myfamily/trip', 'trip.jpg');
```

