---
sidebar_position: 2
---

# Basic functions

CryptoShepherds provides a set of basic functions for data owners and sharers.

With just six functions, you can store, retrieve, and share data in a completely decentralized manner.

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
cs.getSharedData('/path/to/folder', 'filename');
```
