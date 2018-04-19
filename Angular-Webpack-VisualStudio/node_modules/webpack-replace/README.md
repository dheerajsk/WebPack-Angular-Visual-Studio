# Replace loader for [Webpack](http://webpack.github.io/)

Perform replacements (plain and regular expression) in the contents loaded by the loader.

## Install:

```bash
$ npm install --save-dev webpack-replace
```

## Usage:

Add the loader to your `webpack.config.js`:

### Single replacement:

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        {
          test: /fileInWhichJQueryIsUndefined\.js$/,
          loader: 'webpack-replace',
          query: {
            search: 'jQuery',
            replace: 'window.$'
          }
        }
      ]
    }
}
```

### Multiple replacements at once:

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'webpack-replace',
          query: {
            replace: [{
              from: 'jQuery',
              to: 'window.$'
            }]
          }
        }
      ]
    }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
