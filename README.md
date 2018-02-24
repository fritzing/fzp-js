# fzp-js [![](https://paulvollmer.net/fzp-js/badge.svg)](https://paulvollmer.net/fzp-js/)

fritzing fzp javascript library

## Development
```sh
yarn install
make test
```

and lint your files before you commit
```sh
make lint
```

to build an es5 compatible version run
```sh
make build
```

## Usage

```javascript
const {FZPUtils} = require('fzp-js')

const url = 'https://fritzing.github.io/fritzing-parts/core/LED-generic-3mm.fzp'
FZPUtils.loadFZP(url).then((fzp) => {
  console.log('FZP', fzp);

  // load the svg of the breadboard view
  fzp.views.breadboard.loadSVG('foo').then((d) => {
    console.log('SVG', d);
  }).catch((err) => {
    throw new Error(err)
  })

}).catch((e) => {
  throw new Error(err)
})
```

## License
[MIT-LICENSE](LICENSE)
