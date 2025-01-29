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
{
    "kty": "RSA",
    "n": "u-_w87l3h1OuyKt5CkwbqCJe-JJ8nGMDOPEjJLjEAW9wBfjOvTW-LfnHlZMbriMa-dC3YNy1rIbH9P89YpxhHhzu9j6WGQQeryDfusGhZcUKVO4e8IU3E1jhi6na1QKqK3rjct9-8L0Z_HnrUqqI2WJWyN_z7ZyU5ZyM41rstorPKEfuAuEk39SR99Z7u9FbG1jRrps6vBMgh9Wi6WYKx9xS26x3qvJD05zjHQmO0blezGcCsFf7LlFeoKmvZSGU2acjhn5zW_i0Kp44lKqX1PDnu8hbEPvkUYFr3Bgpfqm1RY7vbZ8ZGJESIHVFQQHzsAugAEHFUjHFywbR6ghVPepMOrsqZ6AhxF5SuwVzir7kGdPi8IOatUOTJHPnv-XT0cjP5izqpgl8M8QlcI5FLASqTt409UmMUW4Z6VS4PaKQ1E5hzPrjFuwSgifv24qMgVJwkH0hrkgy_1OA5ao3CLq0vw2bccVzd9E3g4f24t-GAA33dUc1un9y0uIGK2JZC_BWNZW7KRK5t7Vhk5RjfS-wpV7FppfgsBfVHLi-EqHPs8O-4WSdxanfcxaDDVCxuzOC9UZG0AIiGmn4c5mfrFlLoIYcXnpgolY4IwlnnS7yBxQr4Df5srRzCtDkyYkTeX2ddC5erT-Ny-gHZUko7neki-ccdb7OHK6dJ8Nb2D8",
    "e": "AQAB",
    "d": "RNoxAnmuSsvjuuznWVhswXpmJNc2A-1aXuApKejvFj-HYQi4ZSVtWVarQic0-uUtmtxWcowpmt1-IEnqaVg1VFzxRxHC18NkonB-xuLtiGVZ1aevehq0BMiJSSufWm6xfWB2N72dugDtpkvcZNrJbCrU9J7ntOOqwTxLeXf0RSQxpOZFUpS9d6tfFtdjWXnn0OsHVtrT99diEaG5H50c0f_r80MKTHyZUMungRnhUwCAtI4AtC5nfZ6d9mp0Ma7N47eSElH9XXKOPxbcT8r3-TGRFIDgrCY8jYfGxkmr2hW-rY8iNJ0XCqMLawzLpHdcmeCIa8-sxOIrPqhu-zi2UWldITVS8ImNvTDZFDbZupMkSP2_Vwl6bJoZHJzDpvYEZhRoBahL3W6MF0BletAxDJAg-cD2zTGEvmcapv_JG1j7TvyJsfbkbbMaJRv8qVmfrZCmbUs4b4TbUI1SZP5N5kSEYAv5f8A4QrplUN2NCgWGbds2xVWlY7Ulbuq0t2EWqROurdtKpFuUgAuabLi6D2rOHmeOZVhBrXvWgVYjPY-sMgqP6t7LYOMY0jAiRSQBfF7m7XIQm42MS4060z2rYDtRR_0qdwdn9KQn--fI3gsWSdC_JVubOJ66dEGF4MY5RZpRf6teaNX3SWyrQTPSRD372WSER7Gho-xGYHNbzkE",
    "p": "7psA454vOGBR9OBLWSFAYvp8hYsBeLSDzr2oPXHOM2mlZ4btSiQUv3E9CohfvSMDMs_ttFpqofIzG0CXbSJKpeV9UhPhKKvmq7KZ14SGqrQUU16TTFKv6TxTDfrZFCq0UwVS9jvzCnpC0_2v7-NBcj6PtIjnPbbk1NFkzWInJXeBYDzKTr-Zfjul5negQFMnjc5IVO7RrputP4lEs9jtcEJDwKxOQXU_YeDht4Lfafq0sYd34-t0e5z2c-eecBE4hr4DscxPvR7Ve8yQb81RHqufCnxJ60ute8iQWcPNIZ0ebH_QTIKORgyeqG7ssd8qWjC3PudZ3a0090XEWOWJbw",
    "q": "yaNWbug3KcirAC_JNxoAA0H10s6z28ck2RrCwV2H0xcy6wTBLthVbVcCRxfsnIx_Ff1U4Zm8JTQlUdXdQVbWigsbtIpT9qeltia2ip26cJBAS_zV9RpeIBGiIru9orSS0TaMm3uahOUArFz0rit50kRPjl-vk3T34vUmLFCStWKS4DJPQdwGluSZ_C4_zpB-Lqbga_yxvYA7XB_GZfU0r8u6tBZVexOLb8n30yvhfieM7tRw5hlG8hqBqndw3kDVHlhv1Hp9vAJ8x1l3sObwY-ft8b_mMbgwkxH0lziA7zwOeUuYL-2FAhNiOASmvzaSyfdd1VVe3EYOnOVWY7MWMQ",
    "dp": "kVjWt9E6TotOIW8oNwksYZ7Yj7jXkqHT0PJzM8rJo0PtwBzPG2TTRrNCTdI5D8vuPNuwnzac0j3pp-Y22AIVmu0q4_68H7xnbZwEXuaZ6g58ezSXYdzUz60xosh1x_Ujl5ccrGZkbLOBVgWpUOYMjf1SKNVkl5F737AWSY5K7mXX57ngOww4Ak9vhe7FLan55EYOhb5c-JJYfOWvdibkrIeRIiNUIEe97m_Az7rnQXW48JPnEm3xrQM2lfA38WhsGJhTQ9GDmV7ZCOrZ6WEW0yoUXZzMooqdCVRpqmS95oYBbHKHfrPg2wcA9vVrNgcNk5ctaSIg-gpyw1Y6fzSD_Q",
    "dq": "A_pqASQpunRQE1_d-21S5L2PaQpU-BgUvQfPIduDi4Ggqoxcd10jSlX2IIrzSx9mfnuSCiVrVdySg-vRQrHA59ZSRJyaDXq_RTm8Tj3QaNofuqARZJWRl9ZhOYg0tJoVb3VBDuxAXzDZc40d8rW-4Iwiea-fmiwrm9m0WBl624NHXI8Bi04Y_y8hbp1G-v9UzfzS3q6Mny2Bfk7OLkLJOFKvq0_pfdUj4h-8-PibqU6EdE3SsGd9Q9eMCV3z5x6mVcPu6OVFx8jQx2oXd3EG-yGfSy67Du4QX0Zyae1eddncez4nkYKBJkpVnL9SvuEHwl5UBpp5laT4MtY_fxYQcQ",
    "qi": "IM_TEGBJx1CUYYokGUcn6MDWaPlnr4As7Vtb0if1tNUJAzdUSwodN3M5JCo7GJdQCzuN5xnwFmW03NU7hnRUB0w2RdOhTxCfqwn4_TZsQt2etm8L48h3WrnfT-56NYAqPjwTVhXEFpPiKQ6bKOWNhH9HzX1AjQ4_7twao56WGyBgGWoCivx1E7SVH2Zp-jOlTu7Nu4j4yMxYBO_uW5Q2u8TLm6cNJTR0mOeY79B-sMgEC-18nywnzZa0LiO8XmSL7hlonI96EeR1n5Ae-FVvgz-r894EQ8952ceYolz0cS-ISAqk2pX-jVurdwrdKjwtbs2hDEiGB-libdkkyO_Dyw"
}
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
