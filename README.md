# fzp-js [![Build Status](https://travis-ci.org/fritzing/fzp-js.svg?branch=master)](https://travis-ci.org/fritzing/fzp-js) [![](https://fritzing.github.io/fzp-js/badge.svg)](https://fritzing.github.io/fzp-js/)

The fritzing fzp javascript library is for processing fritzing fzp xml data.  
The Library can be used to load fzp's, parse and marshal to XML.


## Installation

Install the npm package
```sh
npm install fritzing/fzp-js --save
```

or use yarn to install and add the dependency to your `package.json`
```sh
yarn add fritzing/fzp-js
```


## Usage

Let's start with a simple szenario and load a fzp file and all svg's.  
Documentation of the library can be found [here](https://fritzing.github.io/fzp-js/)
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


## License
[MIT-LICENSE](LICENSE)
