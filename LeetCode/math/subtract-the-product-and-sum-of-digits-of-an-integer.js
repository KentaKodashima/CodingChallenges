/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * 
 * URL: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
*/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let nString = '' + n
  let sum = 0
  let product = 1

  for (let num of nString) {
    sum += parseInt(num)
    product *= parseInt(num)
  }

  return product - sum
}