# secure-storage-web

## A secure storage for web application

![npm](https://img.shields.io/npm/v/secure-storage-web?color=brightgreen&style=plastic) ![MIT](https://img.shields.io/npm/l/secure-storage-web?color=brightgreen&style=plastic)

## Demo

[You can see the demo here](https://rajeshwarpatlolla.github.io/secure-storage-web-demo/)

## Installation

```javascript
npm install secure-storage-web --save
```

or

```javascript
yarn add secure-storage-web --save
```

## Usage

### In Web application
In side `index.html`
```javascript
<script src="node_modules/secure-storage-web/dist/secure-storage-web.js"></script>
````

In `js` file where you want to use this package
```javascript
var store = new SecureStorageWeb({ name: 'test', type: 'localStorage', secretKey: 'test' });

store.setItem('key1', { a: 12345 });
store.setItem('key2', { a: 6789 });
````
### In Vue application

In your `main.js` file

```javascript
import SecureStorageWeb from 'secure-storage-web';

var store = new SecureStorageWeb({ name: 'test', type: 'localStorage', secretKey: 'test', secure: true });
Vue.prototype.store = store;
```

In `components` where you want to use this package

```javascript
this.store.setItem('key1', { a: 12345 });

this.store.setItem('key2', { a: 6789 });
```

## Options
- **name** : Type `String`. Default value is `app`. You can give your application name so that all your keys in browser storage will be prepended with your name of the application.
- **type** : Type `Storage`. Default value is `localStorage`. You can also use sessionStorage.
- **secretKey** : Type `String`. Default value is `SECRET_KEY`. You can use any secret key.
- **secure** : Type `Boolean`. Default value is `true`. You can enable or disable encryption/decryption with this value.

## Methods
- **setItem** : Set the item in to browser storage
- **getItem** : Get the item from browser storage
- **deleteItem** : Delete the item from storage
- **getAllItems** : Get all the items from storage
- **deleteAllItems** : Delete all the items from storage
- **getAllKeys** : Get all the keys stored
- **getLength** : Get the length of items stored
## npm package
You can find npm registry link [here](https://www.npmjs.com/package/secure-web-storage)
## License

[MIT](https://github.com/rajeshwarpatlolla/secure-storage-web/blob/master/LICENSE.md)

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

## Contact

- Gmail : rajeshwar.patlolla@gmail.com
- Github : https://github.com/rajeshwarpatlolla
- Twitter : https://twitter.com/rajeshwar_9032
- Facebook : https://www.facebook.com/rajeshwarpatlolla
