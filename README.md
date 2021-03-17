# secure-storage-web

## A secure storage for web application

![npm](https://img.shields.io/npm/v/secure-storage-web?color=brightgreen&style=plastic) ![MIT](https://img.shields.io/npm/l/secure-storage-web?color=brightgreen&style=plastic)

## Demo

[You can see the demo here](https://rajeshwarpatlolla.github.io/secure-storage-web-demo/)

### Installation

```
npm install secure-storage-web --save
```

### Usage

##### In Web application
In side `index.html`
````
<script src="node_modules/secure-storage-web/dist/secure-storage-web.js"></script>
````

In `js` file where you want to use this package
````
var store = new SecureStorageWeb({ name: 'test', type: 'localStorage', secretKey: 'test' });

store.setItem('key1', { a: 12345 });
store.setItem('key2', { a: 6789 });
````
##### In Vue application

In your `main.js` file

```
import SecureStorageWeb from 'secure-storage-web';

var store = new SecureStorageWeb({ name: 'test', type: 'localStorage', secretKey: 'test', secure: true });
Vue.prototype.store = store;
```

In `components` where you want to use this package

```
this.store.setItem('key1', { a: 12345 });

this.store.setItem('key2', { a: 6789 });
```

## License

[MIT](https://github.com/rajeshwarpatlolla/secure-storage-web/blob/master/LICENSE.md)

## Release Notes
###v0.0.1
- Initial version with basic storage with encryption and decryption

###v0.0.2
- Initial version with basic storage with encryption and decryption
- Added demo for web application
###v0.0.3
- Added optional feature to enable or disabled encryption and decryption

## Contact

- Gmail : rajeshwar.patlolla@gmail.com
- Github : https://github.com/rajeshwarpatlolla
- Twitter : https://twitter.com/rajeshwar_9032
- Facebook : https://www.facebook.com/rajeshwarpatlolla
