const t = require('../lib/index');

t.describe('TrackSpec', () => {
  t.describe('.describe, .subject, .context, .it, .expect', () => {
    const subject = ( () => value);
    let value = null;

    t.context('When value is 1', () => {
      t.beforeEach(() => {
        value = 1;
      });

      t.it('Equal 1', () => {
        t.expect(subject()).equals(1);
      });
    });

    t.context('When value is object', () => {
      t.beforeEach(() => {
        value = {a: 'b'};
      });

      t.it('Equal object', () => {
        t.expect(subject()).deepEquals({a: 'b'});
      });
    });
  });
});
