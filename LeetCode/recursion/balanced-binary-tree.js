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
  const getHeightIfBalanced = (node) => {
    if (!node) return 0

    let leftLevel = getHeight(node.left)
    let rightLevel = getHeight(node.right)
    
    if (leftLevel === -1 || rightLevel === -1 || Math.abs(leftLevel - rightLevel) > 1) return -1
    return Math.max(leftLevel, rightLevel) + 1
  }

  return getHeightIfBalanced(root) !== -1
}

/**
 * Another approach:
 *    https://www.growingwiththeweb.com/2015/11/check-if-a-binary-tree-is-balanced.html
*/