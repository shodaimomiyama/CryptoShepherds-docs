---
sidebar_position: 7
---

# Decrypt Conditions

このセクションでは、復号条件について説明します。

復号条件は、ユーザーが共有されたデータにアクセスできるかどうかを決定するために使用されます。

復号条件は、`setShareFolder`メソッドや`setShareData`メソッドで設定します。

## 復号条件の設定

復号条件を設定する際は、次のように記述します。

```javascript title="decryptionCondition.js"

// オンチェーンでの検証に関する条件
const acc = [
    {
        contractAddress: '',
        standardContractType: '',
        chain: '',
        method: '',
        parameters: [],
        returnValueTest: {
            comparator: '',
            value: ''
        }
    }
];

// オフチェーンコードの実行による検証に関する条件
const offChainCode = async () => {
    console.log('offChainCode');
};

export default {
    accessControlConditions: acc,
    offChainCode: offChainCode, // optional: オフチェーンコードの実行による検証に関する条件を設定する場合は、このプロパティを設定する必要があります。
    chain: 'ethereum'
};

```

オンチェーンでの検証に関する条件を`acc`に設定し、オフチェーンコードの実行による検証に関する条件を`offChainCode`に設定します。
その後、`export default`で復号条件をエクスポートする必要があります。

では、復号条件の設定方法について具体的に見ていきましょう。

## オンチェーンでの検証に関する条件

オンチェーンでの検証に関する条件は、`acc`に設定します。

```javascript title="Access Control Conditions"

// オンチェーンでの検証に関する条件
const acc = [
    {
        contractAddress: '',
        standardContractType: '',
        chain: '',
        method: '',
        parameters: [],
        returnValueTest: {
            comparator: '',
            value: ''
        }
    }
];
```



## オフチェーンコードの実行による検証に関する条件

オフチェーンコードの実行による検証に関する条件は、`offChainCode`に設定します。

```javascript title="Off Chain Code"

// オフチェーンコードの実行による検証に関する条件
const offChainCode = async () => {
    console.log('offChainCode');
};
```
`offChainCode`は、シンプルなjavascriptの関数です。

自由に復号条件を設定することができ、ユーザーが`offChainCode`を実行した場合に、`true`を返すことでその条件を検証することができます。

オフチェーンコードのオプションとして、単にjavascriptの関数を設定するだけではなく、apiを使用したコードを実行することもできます。

```javascript title="Off Chain Code"

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
```

この機能により、現実の世界のデータを使用したよりフレキシブルな復号条件を設定することができます。

また、`offChainCode`は、CryptoShepherds Protocolにより内部的に[IPFS](https://ipfs.io/)に保存され、ユーザーが`offChainCode`を実行した際に、その`CID`を取得することでLit Nodeにより実行されます。

この機能により、オフチェーンコードの実行による検証に関する条件を、オンチェーン上でのコードの実行（スマートコントラクト）のように設定することができます。
