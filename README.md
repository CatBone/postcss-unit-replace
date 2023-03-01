# postcss-page-break

[![NPM Package][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![License: MIT][mit-img]][mit]

[PostCSS] plugin to replace the css value

[postcss]: https://github.com/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-page-break.svg
[npm]: https://www.npmjs.org/package/postcss-page-break
[ci-img]: https://travis-ci.org/shrpne/postcss-page-break.svg
[ci]: https://travis-ci.org/shrpne/postcss-page-break
[mit-img]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit]: https://github.com/shrpne/postcss-page-break/blob/master/LICENSE

```js
postcss([require('postcss-value-replace')])
```

```css
/* before */
.foo {
  height: 12cc;
}

/* after */
.foo {
  height: 12px;
}
```

## Options

```ts
interface Options {
  before?: string
  after?: string
}
```

## Use with Options

```js
postcss([require('postcss-value-replace')])({
  after: 'qq', // By default, it is 'cc'
  before: 'pt', // By default, it is 'px'
})
```

```css
/* before */
.foo {
  height: 12qq;
}

/* after */
.foo {
  height: 12pt;
}
```

## Installation

```bash
npm install --save-dev postcss postcss-unit-replace
```

## Usage

See [PostCSS] docs for examples for your environment (webpack, gulp, grunt).
