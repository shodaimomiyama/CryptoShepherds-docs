---
sidebar_position: 5
---

# Set Share Data

このセクションでは、共有するデータの設定方法について説明します。

CryptoShepherds Protocolでは、共有するデータの設定に`setShareData`メソッドを使用します。

```javascript title="JavaScript"
cs.setShareData('/path/to/folder', 'filename', decryptionCondition);
```

`setShareData`メソッドは、**共有するデータのパス**、**ファイル名**、**復号条件**を引数に取り、共有するデータを設定します。

```javascript
'/path/to/folder'
```

```javascript
'filename'
```

```javascript
decryptionCondition
```

引数に渡すフォルダは、`createFolder`メソッドで作成したフォルダである必要があります。

`decryptionCondition`は、復号条件を設定するためのオブジェクトです。

詳しくは、[Decrypt Conditions](./decryptCondition)セクションで説明します。

この例では、オフチェーンコードの実行によるアクセス条件の検証を行っています。

以下の`decryptionCondition`では、気温が40度未満の場合にtrueを返す条件を設定しています。

```javascript title="decryptionCondition.js"

const acc = [
    {
        contractAddress: '',
        standardContractType: 'LitAction',
        chain: 'ethereum',
        method: 'go',
        parameters: ["40"],
        returnValueTest: {
            comparator: '=',
            value: 'true'
        }
    }
];

const go = async (maxTemp) => {
  const url = "https://api.weather.gov/gridpoints/LWX/97,71/forecast";
  try {
    const response = await fetch(url).then((res) => res.json());
    const nearestForecast = response.properties.periods[0];
    const temp = nearestForecast.temperature;
    return temp < parseInt(maxTemp);
  } catch (e) {
    console.log(e);
  }
  return false;
};

export default {
    accessControlConditions: acc,
    litActionCode: go,
    chain: 'ethereum'
};

```

この`decryptionCondition`を`setShareData`メソッドの引数に渡すことで、`accessData`メソッドを実行された際に気温が40度未満の場合に、`/myfamily/trip`フォルダに保存された`trip.jpg`ファイルにアクセスできるようになります。

```javascript title="JavaScript"
import decryptionCondition from './decryptionCondition';

cs.setShareData('/myfamily/trip', 'trip.jpg', decryptionCondition);
```

データのアクセスに関しては、[Access Data](./accessData)セクションで詳しく説明します。
