/**
 * 404. Sum of Left Leaves
 * 
 * URL: https://leetcode.com/problems/sum-of-left-leaves/
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let leftSum = 0

  const traverse = (node) => {
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        leftSum += node.left.val
      }
      traverse(node.left)
    }
    if (node.right) traverse(node.right)
  }

  traverse(root)

  return leftSum
}