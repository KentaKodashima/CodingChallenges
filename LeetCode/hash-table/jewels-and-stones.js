/**
 * 771. Jewels and Stones
 * 
 * URL: https://leetcode.com/problems/jewels-and-stones/
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
  let jewelsCount = {}
  let result = 0

  for (let jewel of jewels) {
    jewelsCount[jewel] = 0
  }

  for (let stone of stones) {
    if (jewelsCount[stone] !== undefined) {
      jewelsCount[stone] += 1
    }
  }

  for (let key in jewelsCount) {
    result += jewelsCount[key]
  }

  return result
}

console.log(numJewelsInStones("aA", "aAAbbbb"))