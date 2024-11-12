---
sidebar_position: 3
---

# Basic usage

## Creating and Encrypting a Folder

```javascript title="JavaScript"
await cs.createFolder('/user/documents');
```

## Saving Data

```javascript title="JavaScript"
await cs.saveData('/user/documents', 'file.txt', 'Hello World');
```

## Retrieving Data

```javascript title="JavaScript"
const data = await cs.loadData('/user/documents', 'file.txt');
```

## Sharing a Folder

```javascript title="JavaScript"
const decryptionCondition = { ownsNFT: '0xNFTContractAddress' };
await cs.shareFolder('/user/documents', decryptionCondition);
```
