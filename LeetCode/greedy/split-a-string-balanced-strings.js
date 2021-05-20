/**
 * 1221. Split a String in Balanced Strings
 * 
 * URL: https://leetcode.com/problems/split-a-string-in-balanced-strings/
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let counter = 0
  let balancer = {}

  for (let char of s) {
    if (balancer[char]) {
      balancer[char] += 1
    } else {
      balancer[char] = 1
    }

    if (balancer['R'] === balancer['L']) {
      counter++
      balancer = {}
    }
  }

  return counter
}

console.log(balancedStringSplit('RLRRLLRLRL')) // 4
console.log(balancedStringSplit('RLLLLRRRLR')) // 3
console.log(balancedStringSplit('LLLLRRRR')) // 1
console.log(balancedStringSplit('RLRRRLLRLL')) //2