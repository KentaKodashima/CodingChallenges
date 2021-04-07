/**
 * 938. Range Sum of BST
 * 
 * URL: https://leetcode.com/problems/range-sum-of-bst/
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
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let sum = 0

  function traverse(node) {
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    if (node.val >= low && node.val <= high) {
      sum += node.val
    }
  }

  traverse(root)

  return sum
}