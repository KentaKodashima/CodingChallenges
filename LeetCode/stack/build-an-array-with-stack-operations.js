/**
 * 1441. Build an Array With Stack Operations
 * 
 * URL: https://leetcode.com/problems/build-an-array-with-stack-operations/
*/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let result = []
  let targetObj = {}

  for (let i = 0; i < target.length; i++) {
    targetObj[target[i]] = true
  }

  for (let i = 1; i <= n; i++) {
    if (targetObj[i]) {
      result.push("Push")
    }

    if (!targetObj[i] && i < target[target.length-1]) {
      result.push("Push")
      result.push("Pop")
    }
  }

  return result
}