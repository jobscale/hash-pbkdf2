const { Auth: Pbkdf2 } = require('..');

describe('test Auth', () => {
  describe('describe Auth', () => {
    it('toStrictEqual prompt Auth', done => {
      const auth = new Pbkdf2();
      const hashFirst = auth.hash('it password', 'salt of cake');
      const hashSecond = auth.hash('it password', 'salt of cake');
      expect({ hash: hashFirst }).toStrictEqual({ hash: hashSecond });
      done();
    });
  });
});
