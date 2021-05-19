/**
 * 1684. Count the Number of Consistent Strings
 * 
 * URL: https://leetcode.com/problems/count-the-number-of-consistent-strings/
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let counter = 0

  for (let word of words) {
    let isConsistent = true
    for (let char of word) {
      if (!allowed.includes(char)) {
        isConsistent = false
        break
      }
    }
    if (isConsistent) counter++
  }

  return counter
}