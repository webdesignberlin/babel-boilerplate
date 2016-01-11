'use strict';

var _sourceMapSupport = require('source-map-support');

(0, _sourceMapSupport.install)(); // /*jshint node:true, esnext:true*/

console.log([1, 2, 3].map(function (x) {
  return x * x;
}));

throw new Error('Test! ');
//# sourceMappingURL=app.js.map
