/**
 * 108. Convert Sorted Array to Binary Search Tree
 * 
 * URL: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/**
 * References:
 *    https://afteracademy.com/blog/sorted-array-to-balanced-bst
 *    https://tutorialspoint.dev/data-structure/binary-search-tree/sorted-array-to-balanced-bst
 *    https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36
 * */
var sortedArrayToBST = function(nums) {
  const buildTree = (arr, start, end) => {
    // Stop after traversing all values
    if (start >= end) return null

    // Get the middle element and make it root
    let middle = Math.floor((end + start) / 2)
    let root = new TreeNode(arr[middle])

    // Build the left part
    root.left = buildTree(arr, start, middle - 1)

    // Build the right part
    root.right = buildTree(arr, middle + 1, end)

    return root
  }

  return buildTree(nums, 0, nums.length - 1)
}