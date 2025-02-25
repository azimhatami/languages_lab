// Modules
// Es Module -> import, export, export default
// Commonjs Module -> require, module.exports.foo, module.exports

// const { add, mulNums } = require('./Commonjs_module');

import str, {add, mulNums} from './Esmodule.js';

console.log(add(2, 5), mulNums(2, 5), str);
