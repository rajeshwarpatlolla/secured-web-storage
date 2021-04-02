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
  return config.type.setItem([`${config.name}-${name}`], value);
};

SecureStorageWeb.prototype.getItem = (name) => {
  let value = config.type.getItem([`${config.name}-${name}`]);
  if (value) {
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
  } else {
    value = null;
  }
  return value;
};

SecureStorageWeb.prototype.deleteItem = (name) => {
  return config.type.removeItem([`${config.name}-${name}`]);
};

SecureStorageWeb.prototype.getAllItems = () => {
  let data = null;
  if (config.secure) {
    data = Object.keys(config.type).reduce((obj, str) => {
      if (str.indexOf(config.name) === 0) {
        obj[str] = config.type.getItem(str);
        if (obj[str]) {
          obj[str] = CryptoJS.AES.decrypt(obj[str], config.secretKey);

          if (typeof obj[str] === 'object') {
            obj[str] = JSON.parse(obj[str].toString(CryptoJS.enc.Utf8));
          } else {
            obj[str] = obj[str].toString(CryptoJS.enc.Utf8);
          }
          return obj;
        }
      }
      return obj;
    }, {});
  } else {
    data = Object.keys(config.type).reduce((obj, str) => {
      if (str.indexOf(config.name) === 0) {
        obj[str] = config.type.getItem(str);
        if (obj[str]) {
          if (typeof obj[str] === 'object') {
            obj[str] = JSON.parse(obj[str]);
          }
          return obj;
        }
      }
      return obj;
    }, {});
  }
  return data;
};

SecureStorageWeb.prototype.deleteAllItems = () => {
  return config.type.clear();
};

SecureStorageWeb.prototype.getAllKeys = () => {
  const data = Object.keys(config.type).reduce((obj, str) => {
    obj[str] = config.type.getItem(`${config.name}-${str}`);
    return obj;
  }, {});
  return Object.keys(data).filter((k) => k.indexOf(config.name) === 0);
};

SecureStorageWeb.prototype.getLength = () => {
  const data = Object.keys(config.type).reduce((obj, str) => {
    obj[str] = config.type.getItem(`${config.name}-${str}`);
    return obj;
  }, {});
  return Object.keys(data).filter((k) => k.indexOf(config.name) === 0).length;
};

module.exports = SecureStorageWeb;
