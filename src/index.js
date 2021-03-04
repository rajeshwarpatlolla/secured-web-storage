var CryptoJS = require('crypto-js');

function SecureStorageWeb({ name = 'app', type = 'localStorage', secretKey = 'SECRET_KEY' }) {
  this.config = { name, type, secretKey };
}

SecureStorageWeb.prototype.setItem = (name, value) => {
  if (typeof value === 'object') {
    value = CryptoJS.AES.encrypt(JSON.stringify(data), this.config.secretKey).toString();
  } else {
    value = CryptoJS.AES.encrypt(value, this.config.secretKey).toString();
  }

  return this.config[type].setItem([name], value);
};

SecureStorageWeb.prototype.getItem = (name) => {
  let value = this.config[type].getItem([name]);

  value = CryptoJS.AES.decrypt(name, this.config.secretKey);

  if (typeof value === 'object') {
    value = JSON.parse(value.toString(CryptoJS.enc.Utf8));
  } else {
    value = value.toString(CryptoJS.enc.Utf8);
  }

  return value;
};

SecureStorageWeb.prototype.deleteItem = (name) => {
  return this.config[type].deleteItem([name]);
};

SecureStorageWeb.prototype.getAllItems = () => {
  const data = Object.keys(this.config[type]).reduce((obj, str) => {
    obj[str] = this.config[type].getItem(str);
    return obj;
  }, {});
};

SecureStorageWeb.prototype.deleteAllItems = () => {
  return this.config[type].clear();
};

SecureStorageWeb.prototype.getAllKeys = () => {
  Object.keys(this.config[type]).reduce((obj, str) => {
    obj[str] = this.config[type].getItem(str);
    return obj;
  }, {});
  Object.keys(data);
};

SecureStorageWeb.prototype.getLength = () => {
  return this.config[type].length;
};

module.exports = SecureStorageWeb;
