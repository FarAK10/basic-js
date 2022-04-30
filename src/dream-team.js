const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
     arr1 = arr.filter(n => typeof n === 'string').map(n => n.split(' ').join("").toUpperCase()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let str = '';
  for (let i = 0; i < arr1.length; i++){
    str += arr1[i][0];
  }
  return str;
  }
  return false
}

module.exports = {
  createDreamTeam
};
