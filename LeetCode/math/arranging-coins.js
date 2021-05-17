/**
 * 441. Arranging Coins
 * 
 * URL: https://leetcode.com/problems/arranging-coins/
*/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let rowsNum = 0
  let numSum = 0
  let counter = 1

  while (numSum <= n) {
    numSum += counter
    rowsNum++
    counter++
  }

  return rowsNum - 1
}

console.log(arrangeCoins(5))