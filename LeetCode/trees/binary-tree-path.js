/**
 * 257. Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = []

  function traverse(node, path) {
    // Add the node's value first
    path += node.val
    // Push the path if it's a leaf node
    if (!node.left && !node.right) result.push(path)
    // Add the arraw
    path += '->'
    // Continue traversing
    if (node.left) traverse(node.left, path)
    if (node.right) traverse(node.right, path)
  }

  traverse(root, '')

  return result
}