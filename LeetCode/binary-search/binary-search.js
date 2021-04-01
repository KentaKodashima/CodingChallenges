/**
 * 704. Binary Search
 * 
 * URL: https://leetcode.com/problems/binary-search/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left  = 0
  let right = nums.length - 1
  let middle

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return - 1
}