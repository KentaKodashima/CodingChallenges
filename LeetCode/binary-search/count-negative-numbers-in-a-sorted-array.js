/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 * 
 * URL: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const findFirstNegativeIndex = (arr) => {
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left + right) / 2)

    while (left <= right) {
      middle = Math.floor((right + left) / 2)
      if (arr[middle] < 0) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    return left
  }

  let firstNegativeIndex
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    firstNegativeIndex = findFirstNegativeIndex(grid[i])
    count += grid[i].length - firstNegativeIndex
  }

  return count
}