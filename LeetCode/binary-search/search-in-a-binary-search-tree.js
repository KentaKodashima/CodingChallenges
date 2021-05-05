/**
 * 700. Search in a Binary Search Tree
 * 
 * URL: https://leetcode.com/problems/search-in-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return undefined
  
  let current = root
  while (true) {
    if (!current) return null
    if (current.val === val) return current
    if (current.val > val) {
      current = current.left
    } else {
      current = current.right
    }
  }
}