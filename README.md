# @jobscale/hash-pbkdf2

## installation

```
npm i @jobscale/hash-pbkdf2
```

## examples

```
const { Auth: Pbkdf2 } = require('@jobscale/hash-pbkdf2');

const logger = console;
const auth = new Pbkdf2();
const hash = auth.hash('it password', 'salt of cake');
logger.info({ hash });
```

## lint

```
npm run lint
```

## test

```
npm test
```
