/**
 * 104. Maximum Depth of Binary Tree
 * 
 * URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
  const traverse = (node) => {
    if (!node) return 0
    // Continue traversing
    let left = traverse(node.left)
    let right = traverse(node.right)

    return Math.max(left, right) + 1
  }

  return traverse(root)
}