# postcss-unit-replace

[![NPM Package][npm-img]][npm]
[![License: MIT][mit-img]][mit]

[PostCSS] plugin to replace the css value

[postcss]: https://github.com/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-unit-replace.svg
[npm]: https://www.npmjs.com/package/postcss-unit-replace
[mit-img]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit]: https://github.com/CatBone/postcss-unit-replace/blob/main/LICENSE

```js
postcss([require('postcss-unit-replace')])
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
postcss([require('postcss-unit-replace')])({
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
