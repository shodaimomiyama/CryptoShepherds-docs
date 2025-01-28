---
sidebar_position: 3
---

# First project setup

## Initializing the SDK

以下のように、SDKの初期化を行います。

```javascript title="JavaScript"
import { CryptoShepherds } from 'cryptoshepherds-sdk';

const cs = new CryptoShepherds({
    walletKey: arweaveKey,
    // privateKey: userPrivateKey,（optional)
    // publicKey: userPublicKey,（optional)
    evmPrivateKey,
    arweaveNetwork: 'testnet',
    litNetwork: 'development',
});
```

初期化時に必要な項目は以下の4つです。

・arweaveWalletKey

・EVMの秘密鍵

・arweaveNetworkの選択（mainnet or testnet）

・LitNetworkの選択（mainnet or testnet or development）

また、オプションで以下の項目を初期化時に設定することができます。

・データ所有者のマスターアクセス権となる秘密鍵（privateKey: userPrivateKey）

・データ所有者のマスターアクセス権となる秘密鍵野ペアとなる公開鍵（publicKey: userPublicKey）