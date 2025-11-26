import { Auth as Pbkdf2 } from '../index.js';

describe('test Auth', () => {
  describe('test auth', () => {
    it('toStrictEqual prompt Auth', async () => {
      const auth = new Pbkdf2();
      const hashFirst = auth.hash('it password', 'salt of cake');
      const hashSecond = auth.hash('it password', 'salt of cake');
      expect({ hash: hashFirst }).toStrictEqual({ hash: hashSecond });
    });
  });
});
