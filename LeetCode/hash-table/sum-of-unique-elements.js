/**
 * 1748. Sum of Unique Elements
 * 
 * URL: https://leetcode.com/problems/sum-of-unique-elements/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let counter = {}
  let result = 0

  for (num of nums) {
    if (counter[num]) {
      counter[num] += 1
    } else {
      counter[num] = 1
    }
  }

  for (key in counter) {
    if (counter[key] === 1) {
      result += parseInt(key)
    }
  }

  return result
}

sumOfUnique([1,2,3,2])