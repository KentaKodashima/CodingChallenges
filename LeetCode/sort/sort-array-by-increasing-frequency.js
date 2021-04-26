/**
 * 1636. Sort Array by Increasing Frequency
 * 
 * URL: https://leetcode.com/problems/sort-array-by-increasing-frequency/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Bubble Sort ver
var frequencySort = function(nums) {
  const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  let frequency = {}

  for (let num of nums) {
    if (frequency[num]) {
      frequency[num] += 1
    } else {
      frequency[num] = 1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (frequency[nums[i]] > frequency[nums[j]]) {
        swap(nums, i, j)
      } else if (frequency[nums[i]] === frequency[nums[j]]) {
        if (nums[i] < nums[j]) {
          swap(nums, i, j)
        }
      }
    }
  }

  return nums
}

console.log(frequencySort([1,1,2,2,2,3]).toString())