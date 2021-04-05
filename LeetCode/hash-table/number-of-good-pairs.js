/**
 * 1512. Number of Good Pairs
 * 
 * URL: https://leetcode.com/problems/number-of-good-pairs/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let map = {}
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1
    } else {
      map[nums[i]] = 1
    }
  }

  for (let key in map) {
    let num = map[key]
    result += (num * (num - 1)) / 2
  }

  return result
}

// [1,1,1] 3 3
// [1,1,1,1] 4 6
// [1,1,1,1,1] 5 10
// [1,1,1,1,1,1] 6 15
// [1,1,1,1,1,1,1] 7 21
// [1,1,1,1,1,1,1,1] 8 28