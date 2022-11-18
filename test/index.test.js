const { Auth } = require('..');

const test = () => {
  const logger = console;
  const match = 'l2HmlzzR+JNfLXnw6I+/XCN8UUL0DDoL/X3R5WLmxDg=';
  const password = 'my password';
  const secret = new Auth().hashPbkdf2(password);
  logger.info({ secret, match: secret === match });
};

test();
