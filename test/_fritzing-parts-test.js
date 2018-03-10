'use strict';

const fs = require('fs');
const path = require('path');
const {parseFZP} = require('../src/utils');

let fzpDir = fs.readdirSync(path.join(__dirname, './fixtures/fritzing-parts/core'));

// for (var i = 0; i < fzpDir.length; i++) {
//   if (path.extname(fzpDir[i]) === ".fzp") {
//
//     const data = fs.readFileSync('./test/fixtures/LED-generic-3mm.fzp');
//     parseFZP(data)
//     .then((fzp) => {
//       console.log('==> OK   ', fzpDir[i]);
//     })
//     .catch(e => {
//       console.error('==> ERROR',fzpDir[i])
//       console.error(e);
//     })
//     console.log(path.extname(fzpDir[i]));
//   }
// }

eachPromise(fzpDir, (name, next) => {
  if (path.extname(name) === '.fzp') {
    const data = fs.readFileSync(path.join(__dirname, './fixtures/fritzing-parts/core', name));
    parseFZP(data)
    .then((fzp) => {
      // console.log('==> OK   ', name);
      next();
    })
    .catch((err) => {
      console.error('==> ERROR', name);
      console.error(err);
      next();
    });
  }
}, () => {
  console.log('==> done');
});

function eachPromise(items, task, cb) {
  let idx = 0;
  let len = items.length;
  iter();
  function iter() {
    task(items[idx++], function() {
 idx >= len ? cb() : iter();
});
  }
};
