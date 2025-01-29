---
sidebar_position: 2
---

# First project setup

## Initializing the SDK

以下のように、SDKの初期化を行います。

```javascript title="JavaScript"
import CryptoShepherds from 'cryptoshepherds-sdk';

const cs = new CryptoShepherds({
    walletKey: arweaveKey,
    // privateKey: userPrivateKey,（optional)
    // publicKey: userPublicKey,（optional)
    evmPrivateKey,
    arweaveNetwork: 'testnet or mainnet',
    litNetwork: 'development or testnet or mainnet',
});
```

初期化時に必要な項目は以下の4つです。

- arweaveWalletKey

- evmPrivateKey

- arweaveNetworkの選択（mainnet or testnet）

- LitNetworkの選択（mainnet or testnet or development）

また、オプションで以下の項目を初期化時に設定することができます。

- データ所有者のマスターアクセス権となる秘密鍵（privateKey: userPrivateKey）

- データ所有者のマスターアクセス権となる秘密鍵野ペアとなる公開鍵（publicKey: userPublicKey）

---

各項目に関して詳しく見ていきましょう。

### arweaveWalletKey

`arweaveWalletKey`は、Arweaveでtxを作成する際に使用する秘密鍵です。

Arweaveは分散型ストレージとして、データの保存と取得のプロセスで利用します。

`arweaveWalletKey`は、json形式で以下のように記述されています。

:::warning

以下の`arweaveWalletKey`は、実際のArweave Networkで利用できるアドレスに対応しています。実際にプロジェクトを作成する際は、`arweaveWalletKey`を自分で生成してください。

:::

```json

```


### evmPrivateKey

EVMの秘密鍵です。
例えば、MeteMaskの秘密鍵を使用することができます。

Lit Networkで署名を行う際に使用します。

:::warning
`privateKey: userPrivateKey,（optional)`を設定しない場合には、データのマスターアクセス権を持つ秘密鍵の役割も持つことになります。
この秘密鍵を紛失すると、保存したデータへのアクセスができなくなります。
:::

### arweaveNetwork

`testnet`か`mainnet`を選択できます。`testnet`の場合は、`arweaveWalletKey`にあらかじめテストトークンを入れておく必要があります。

```javascript title="setUp.js"
arweaveManager = new ArweaveManager();
const address = await arweaveManager.arweave.wallets.jwkToAddress(arweaveKey);

// ミント(例: 100 AR = "100000000000" winston)
const mintUrl = `http://localhost:1984/mint/${address}/100000000000`;
const mintResponse = await fetch(mintUrl);
if (!mintResponse.ok) {
    throw new Error(`Failed to mint AR. Status: ${mintResponse.status}`);
}

// mine (ブロック生成)
const mineResponse = await fetch('http://localhost:1984/mine');
if (!mineResponse.ok) {
    throw new Error(`Failed to mine block. Status: ${mineResponse.status}`);
}
```

`mainnet`の場合は、`arweaveWalletKey`にあらかじめArweaveのネイティブトークンを入れておく必要があります。実際にコストがかかるので注意してください。

### litNetwork

`development`か`testnet`か`mainnet`を選択できます。

`development`の場合は、テストトークンを入れておく必要はありません。

`testnet`の場合は、テストトークンを入れておく必要があります。

`mainnet`の場合は、Litのネイティブトークンを入れておく必要があります。
