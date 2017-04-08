# @cfware/require-later

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

ES6 Proxy object for delayed module require.

### Install @cfware/require-later

```sh
npm i --save-dev @cfware/require-later
```

## Usage

The below example shows appropriate use of this module to require `@cfware/gulp-serve`.
The purpose is to allow `gulp --tasks-simple` to run for shell completion without delay
caused by large chains of required modules.

```js
'use strict';

const gulp = require('gulp');
const $ = require('@cfware/require-later')(require, {
	gulpServe: '@cfware/gulp-serve'
});

gulp.task('serve', () => $.gulpServe({
	ports: [8081, 0],
	statics: {'/': 'test'},
	redirects: {'/': '/my-app'},
}));
```

## Running tests

The only test currently provided is eslint.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/require-later.svg
[npm-url]: https://npmjs.org/package/@cfware/require-later
[downloads-image]: https://img.shields.io/npm/dm/@cfware/require-later.svg
[downloads-url]: https://npmjs.org/package/@cfware/require-later
[license-image]: https://img.shields.io/github/license/cfware/require-later.svg
