const pbkdf2 = require('pbkdf2');

const config = {
  salt: 'my salt',
};

class Auth {
  hash(password, salt) {
    return this.hashPbkdf2(password, salt);
  }

  hashPbkdf2(password, salt) {
    const iterations = 10000;
    const keylen = 32;
    const digest = 'sha256';
    return pbkdf2.pbkdf2Sync(password, salt || config.salt, iterations, keylen, digest)
    .toString('base64');
  }
}

module.exports = {
  Auth,
  auth: new Auth(),
};
