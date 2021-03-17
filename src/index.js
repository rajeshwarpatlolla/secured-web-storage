var CryptoJS = require('crypto-js');

var config = {};
function SecureStorageWeb({ name = 'app', type = 'localStorage', secretKey = 'SECRET_KEY', secure = true }) {
  config = { name, type, secretKey, secure };
  config.type = config.type === 'localStorage' ? localStorage : sessionStorage;
}

SecureStorageWeb.prototype.setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  } else {
    value = value.toString();
  }
  if (config.secure) {
    value = CryptoJS.AES.encrypt(value, config.secretKey).toString();
  }
  return config.type.setItem([name], value);
};

SecureStorageWeb.prototype.getItem = (name) => {
  let value = config.type.getItem([name]);
  if (config.secure) {
    value = CryptoJS.AES.decrypt(value, config.secretKey);
    if (typeof value === 'object') {
      value = JSON.parse(value.toString(CryptoJS.enc.Utf8));
    } else {
      value = value.toString(CryptoJS.enc.Utf8);
    }
  } else {
    if (typeof value === 'object') {
      value = JSON.parse(value);
    }
  }
  return value;
};

SecureStorageWeb.prototype.deleteItem = (name) => {
  return config.type.removeItem([name]);
};

SecureStorageWeb.prototype.getAllItems = () => {
  if (config.secure) {
    return Object.keys(config.type).reduce((obj, str) => {
      obj[str] = config.type.getItem(str);
      obj[str] = CryptoJS.AES.decrypt(obj[str], config.secretKey);

      if (typeof obj[str] === 'object') {
        obj[str] = JSON.parse(obj[str].toString(CryptoJS.enc.Utf8));
      } else {
        obj[str] = obj[str].toString(CryptoJS.enc.Utf8);
      }
      return obj;
    }, {});
  } else {
    return Object.keys(config.type).reduce((obj, str) => {
      obj[str] = config.type.getItem(str);
      if (typeof obj[str] === 'object') {
        obj[str] = JSON.parse(obj[str]);
      }
      return obj;
    }, {});
  }
};

SecureStorageWeb.prototype.deleteAllItems = () => {
  return config.type.clear();
};

SecureStorageWeb.prototype.getAllKeys = () => {
  const data = Object.keys(config.type).reduce((obj, str) => {
    obj[str] = config.type.getItem(str);
    return obj;
  }, {});
  return Object.keys(data);
};

SecureStorageWeb.prototype.getLength = () => {
  return config.type.length;
};

module.exports = SecureStorageWeb;
