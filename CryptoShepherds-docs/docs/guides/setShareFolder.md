---
sidebar_position: 4
---

# Set Share Folder

このセクションでは、共有するフォルダの設定を行う方法を説明します。

CryptoShepherds Protocolでは、共有するフォルダの設定に`setShareFolder`メソッドを使用します。

```javascript title="JavaScript"
cs.setShareFolder('/path/to/folder', decryptionCondition);
```

`setShareFolder`メソッドは、**共有するフォルダのパス**と**復号条件**を引数に取り、共有するフォルダを設定します。

```javascript
'/path/to/folder'
```

```javascript
decryptionCondition
```

引数に渡すフォルダは、`createFolder`メソッドで作成したフォルダである必要があります。

`decryptionCondition`は、復号条件を設定するためのオブジェクトです。

復号条件は、オンチェーンでの検証とオフチェーンコードの実行のどちらも可能です。

詳しくは、[Decrypt Conditions](./decryptCondition)セクションで説明します。

この例では、オンチェーンでの検証を行っています。

以下の`decryptionCondition`では、ウォレットが0.000001 ETH以上を持つ条件を設定しています。



```javascript title="decryptionCondition.js"
const acc = [
    {
        contractAddress: '',
        standardContractType: '',
        chain: 'ethereum',
        method: 'eth_getBalance',
        parameters: [":userAddress", "latest"],
        returnValueTest: {
            comparator: '>=',
            value: '1000000000000', // 0.000001 ETH
        },
    },
];

export default {
    accessControlConditions: acc,
    chain: 'ethereum'
};
```

例えば、`/myfamily/trip`フォルダを上記の復号条件で共有する場合、以下のように記述します。

```javascript title="JavaScript"
import decryptionCondition from './decryptionCondition';

cs.setShareFolder('/myfamily/trip', decryptionCondition);
```

この場合、`/myfamily/trip`フォルダに保存されたデータは、`cs.accessData`メソッドを実行したユーザーがアクセス条件を満たした場合に取得することができます。

また、`myfamily`フォルダを共有する場合、以下のように記述します。

```javascript 
cs.setShareFolder('/myfamily', decryptionCondition);
```

この場合は、`/myfamily`フォルダ配下の全てのフォルダやファイルがアクセス条件を満たしたユーザーに共有されます。



データのアクセスに関しては、[Access Data](./accessData)セクションで詳しく説明します。
