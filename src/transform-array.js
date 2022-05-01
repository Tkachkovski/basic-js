const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
  let arrayFinish = [];
  arrayFinish = arr;
  if (arrayFinish !== {} && typeof arrayFinish !== Boolean && typeof arrayFinish !== Number && arrayFinish !== null && arrayFinish !== undefined ){
  for(let i=0; i< arrayFinish.length; i++){
    if(arrayFinish[i] == '--double-next'){
      if(arrayFinish[i+1] !== ''){
         arrayFinish[i] = arrayFinish[i+1];
      } 
    }
    if(arrayFinish[i] == '--double-prev'){
      if(arrayFinish[i-1] !== ''){
         arrayFinish[i] = arrayFinish[i-1];
      }
    } 
    if(arrayFinish[i] == '--discard-next'){
      if(arrayFinish[i+1] !== ''){
         arrayFinish.splice(arrayFinish[i-1],2)
      }
    } 
    if(arrayFinish[i] == '--discard-prev'){
      if(arrayFinish[i-1] !== ''){
         arrayFinish.splice(arrayFinish[i-2],1)
      }else{
        arrayFinish.splice(arrayFinish[i-1],1)
      }
  }
  
  }
  return arrayFinish;
  } else {
    return new Error("\'arr\' parameter must be an instance of the Array!");
  }
  
}
  



module.exports = {
  transform
};
