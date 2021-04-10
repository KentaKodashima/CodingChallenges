/**
 * 110. Balanced Binary Tree
 * 
 * URL: https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let leftLevel = 0
  let rightLevel = 0

  function getHeight(node) {
    if (!node) return 0
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
  }

  leftLevel = getHeight(root.left)
  rightLevel = getHeight(root.right)

  return Math.abs(leftLevel - rightLevel) < 2
}