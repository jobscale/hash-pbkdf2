const pbkdf2 = require('pbkdf2');

const config = {
  salt: 'my salt',
};

class Auth {
  hashPbkdf2(password, salt) {
    const iterations = 10000;
    const keylen = 32;
    const digest = 'sha256';
    return pbkdf2.pbkdf2Sync(password, salt || config.salt, iterations, keylen, digest)
    .toString('base64');
  }
}

const test = () => {
  const logger = console;
  const match = 'l2HmlzzR+JNfLXnw6I+/XCN8UUL0DDoL/X3R5WLmxDg=';
  const password = 'my password';
  const secret = new Auth().hashPbkdf2(password);
  logger.info({ secret, match: secret === match });
};

test();
