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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let number = n.toString().split("").map(n => parseInt(n));
  let arr = [];
  for (let i = 0; i < number.length; i++){
    let arr1 = n.toString().split("")
    arr1.splice(i, 1);
    arr.push(arr1);
  }
  arr = arr.map(n=>parseInt(n.join("")))
  arr.sort((a, b) => a - b);
  return arr[arr.length-1]
}

module.exports = {
  deleteDigit
};
