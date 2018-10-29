# SyncStorage

Synchronous storage for
[React Native AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html).

[![Build Status](https://travis-ci.org/raphaelpor/sync-storage.svg?branch=master)](https://travis-ci.org/raphaelpor/sync-storage)
[![codecov](https://codecov.io/gh/raphaelpor/sync-storage/branch/master/graph/badge.svg)](https://codecov.io/gh/raphaelpor/sync-storage)
[![npm version](https://badge.fury.io/js/sync-storage.svg)](https://www.npmjs.com/package/sync-storage)
[![license](https://img.shields.io/npm/l/sync-storage.svg)](https://github.com/raphaelpor/sync-storage/blob/master/LICENSE.md)

## Get Started

* [Installation](https://github.com/raphaelpor/sync-storage#Installation)
* [Usage](https://github.com/raphaelpor/sync-storage#Usage)
* [Methods Available](https://github.com/raphaelpor/sync-storage#methods-available)

### Installation

```sh
yarn add sync-storage
# or
# npm i --save sync-storage
```

### Usage

```js
import SyncStorage from 'sync-storage';

SyncStorage.set('foo', 'bar');

const result = SyncStorage.get('foo');
console.log(result); // 'bar'
```

### Methods Available

#### init()

Init prepares the SyncStorage to work synchronously, by getting all values for all keys previously
saved on RN AsyncStorage. See the example:

```js
const data = await SyncStorage.init();
console.log('AsyncStorage is ready!', data);
```

#### get(key: _string_)

Returns the value of key.

```js
SyncStorage.get('foo'); // 'bar'
```

#### set(key: _string_, value: _Any type_)

It saves the value on memory and on the AsyncStorage.

```js
SyncStorage.set('foo', 'bar');
SyncStorage.get('foo'); // 'bar'
```

It also returns a Promise for post verification.

```js
SyncStorage.set('foo', 'bar')
  .then(() => {
    SyncStorage.get('foo'); // 'bar'
  })
  .catch(error => {
    console.log(error);
  });
```

#### remove(key: _string_)

It removes the value from the memory and from the AsyncStorage.

```js
SyncStorage.remove('foo');
```

It also returns a Promise for post verification.

```js
SyncStorage.remove('foo')
  .then(() => {
    SyncStorage.get('foo'); // undefined
  })
  .catch(error => {
    console.log(error);
  });
```

#### getAllKeys()

returns an array from all the keys.

 ```js
 SyncStorage.set('foo', 'bar');
 SyncStorage.set('boo', 'baz');
 console.log(SyncStorage.getAllKeys()) // ['foo', 'boo']
```
