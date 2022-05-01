const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let count = 0;

    if(!Array.isArray(arr) || !arr) return 0;
    if(Array.isArray(arr)){
      for (let item of arr){
        if(Array.isArray(item)){
          result = this.calculateDepth(item)
          if (count < result) {
            count = result
          }
        }
      }
      return count + 1;
    }
  return count 
}
}

module.exports = {
  DepthCalculator
};
