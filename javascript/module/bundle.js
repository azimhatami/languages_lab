(function(){function p(o,i,f){var a="function"==typeof require&&require;function c(n,r){if(!i[n]){if(!o[n]){var e="function"==typeof require&&require;if(!r&&e)return e(n,!0);if(a)return a(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var e=i[n]={exports:{}};o[n][0].call(e.exports,function(r){var e;return c(o[n][1][r]||r)},e,e.exports,p,o,i,f)}return i[n].exports}for(var r=0;r<f.length;r++)c(f[r]);return c}return p})()({1:[function(require,module,exports){
const utils = require('./utils');

console.log(utils.userName);
utils.fetchApi();


},{"./utils":2}],2:[function(require,module,exports){
const userName = 'Azim';

function fetchApi() {
  console.log('url successfully fetched !');
}

module.exports.userName = userName;
module.exports.fetchApi = fetchApi;

// console.log(module);

},{}]},{},[1]);
