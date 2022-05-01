const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max;
  let arr = []
  let numString = n.toString();
   for(let i=0; i<numString.length; i++){
  arr.push(numString.slice(0,i) + numString.slice(i+1));
  max = Math.max(...arr)
   }
   return max
 }

module.exports = {
  deleteDigit
};
