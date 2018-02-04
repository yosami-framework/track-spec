# TrackSpec

A test framework of track.

## Installation

### npm

```shell
npm install track-spec
```

## Usage

This framework is extension of ospec.

### Running test

package.json

```json
"scripts": {
  "test": "ospec"
}
```

```shell
$ npm test
```

### Example

TrackSpec has the methods of ospec and methods of like rspec. (`describe`, `context`, `it`, `expect`)

```javascript
const t    = require('track-spec');
const Hoge = require('./hoge');

t.describe('Hoge', () => {
  t.describe('.hoge', () => {
    const subject = ( () => Hoge.hoge(type));
    let type = null;

    t.context('When type is `upper`', () => {
      t.beforeEach(() => {
        type = `upper`;
      });

      t.it('Return HOGE', () => {
        t.expect(subject()).equals('HOGE');
      });
    });

    t.context('When type is `lower`', () => {
      t.beforeEach(() => {
        type = `lower`;
      });

      t.it('Return hoge', () => {
        t.expect(subject()).equals('hoge');
      });
    });
  });
});
```

## CONTRIBUTING

### test

```
$ npm test
```

### linter

```
$ npm run linter
```
