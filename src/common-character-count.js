const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount(a, b) {
  let counter = 0;
  let arr2 = b.split('');
  for (let item of a) {
    let index = arr2.findIndex(str => str === item) // 0 1 -1 
    if (index >= 0) {
      counter++;
      arr2.splice(index, 1)
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
