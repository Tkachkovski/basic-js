const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str){
  const arr = [];
 let value = 1;
 for (let i = 0; i<str.length;i++){
   if(str[i] !== str[i+1]){
     arr.push([value,str[i]])
     value = 1
   }else{
     value++
   }
   }
 return arr.toString().replace(/[\s.,%]/g, '').replace(/[1]/g,'')
 }

module.exports = {
  encodeLine
};
