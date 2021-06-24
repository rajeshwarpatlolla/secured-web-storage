# secured-web-storage
The data will be stored using [CryptoJS](https://github.com/brix/crypto-js) AES (Advanced Encryption Standard)
## A secure storage for web application

![npm](https://img.shields.io/npm/v/secured-web-storage?color=brightgreen&style=plastic) ![MIT](https://img.shields.io/npm/l/secured-web-storage?color=brightgreen&style=plastic)

## Demo

[You can see the demo here](https://rajeshwarpatlolla.github.io/secured-web-storage/demo/)

## Installation

```javascript
npm install secured-web-storage --save
```

or

```javascript
yarn add secured-web-storage --save
```

## Usage

### In Web application
In side `index.html`
```javascript
<script src="node_modules/secured-web-storage/dist/secured-web-storage.js"></script>
````

In `js` file where you want to use this package
```javascript
var config = { name: 'test', type: 'localStorage', secretKey: 'test' };
var store = new SecuredWebStorage(config);

store.setItem('key1', { a: 12345 });

store.getItem('key1');
````
### In Vue application

In your `main.js` file

```javascript
import SecuredWebStorage from 'secured-web-storage';

var config = { name: 'test', type: 'localStorage', secretKey: 'test', secure: true };
var store = new SecuredWebStorage(config);

Vue.prototype.store = store;
```

In vue.js `components` where you want to use this package

```javascript
this.store.setItem('key1', { a: 12345 });

this.store.get('key1');
```

## Configuration Options

Option  | Type | Default Value | Description
------  | ---- | ------------- | -----------
`name`    | String | app |  You can give your application name so that all your keys in browser storage will be prepended with your name of the application
`type`    | Storage | localStorage |  You can use either localStorage or sessionStorage
`secretKey` | String | SECRET_KEY | You can use any secret key
`secure`  | Boolean | true |  You can enable or disable encryption / decryption with this value

#### Usage of configuration options
```javascript
var config = { name: 'test', type: 'localStorage', secretKey: 'test', secure: true };
var store = new SecuredWebStorage(config);
````

## Methods

Method  | Syntax | Description
------  | ------ |  -----------
setItem | `setItem('key', value)` | Set the item in to browser storage.
getItem | `getItem('key')` | Get the item from browser storage.
deleteItem | `deleteItem('key')` | Delete the item from storage.
getAllItems | `getAllItems()` | Get all the items from storage.
deleteAllItems | `deleteAllItems()` | Delete all the items from storage.
getAllKeys | `getAllKeys()` | Get all the keys stored.
getLength | `getLength()` | Get the length of items stored.

## npm package
You can find npm registry link [here](https://www.npmjs.com/package/secured-web-storage)
## License

[MIT](https://github.com/rajeshwarpatlolla/secured-web-storage/blob/master/LICENSE.md)

## Release Notes
### v0.0.1
- Initial version with basic storage with encryption and decryption

### v0.0.2
- Initial version with basic storage with encryption and decryption
- Added demo for web application

### v0.0.3
- Added optional feature to enable or disabled encryption and decryption
- Added vue.js app demo

### v0.1.0
- Stable version release

### v0.2.0
- Keys will be fetched based on the configuration
- Updated Readme with configuration options and methods

## Contact

- Gmail : rajeshwar.patlolla@gmail.com
- Github : https://github.com/rajeshwarpatlolla
- Twitter : https://twitter.com/rajeshwar_9032
- Facebook : https://www.facebook.com/rajeshwarpatlolla
