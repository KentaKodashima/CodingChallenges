/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * 
 * URL: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = []
  let keyMap = {}

  for (let i = 0; i < nums.length; i++) {
    keyMap[nums[i]] = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) keyMap[nums[i]] += 1
    }
    result.push(keyMap[nums[i]])
  }

  return result
}