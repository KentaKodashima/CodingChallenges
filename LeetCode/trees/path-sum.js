/**
 * 112. Path Sum
 * 
 * URL: https://leetcode.com/problems/binary-tree-paths/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let result = false

  const traverse = (node, sum) => {
    if (!node) return
    sum = sum+= node.val
    if (!node.left && !node.right && sum === targetSum) result = true
    if (node.left) traverse(node.left, sum)
    if (node.right) traverse(node.right, sum)
  }

  traverse(root, 0)

  return result
}