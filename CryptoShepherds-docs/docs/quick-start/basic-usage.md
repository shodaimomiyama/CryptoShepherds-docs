---
sidebar_position: 2
---

# Basic functions

CryptoShepherdsはデータ所有者と共有者のための基本的な機能を提供します。

たった6つの機能で、完全に分散化された方法でデータの保存、取得、共有が可能です。

## Functions for Data Owners

### Creating a Folder

```javascript title="JavaScript"
cs.createFolder('/path/to/folder');
```

### Saving Data

```javascript title="JavaScript"
cs.saveData('/path/to/folder', 'filename', data);
```

### Retrieving Data

```javascript title="JavaScript"
cs.loadData('/path/to/folder', 'filename');
```

## Functions for Data Sharers

### Sharing a Folder

```javascript title="JavaScript"
cs.setShareFolder('/path/to/folder', decryptionCondition);
```

### Sharing a File

```javascript title="JavaScript"
cs.setShareData('/path/to/folder', 'filename', decryptionCondition);
```

### Accessing Shared Data

```javascript title="JavaScript"
cs.accessData('/path/to/folder', 'filename');
```
