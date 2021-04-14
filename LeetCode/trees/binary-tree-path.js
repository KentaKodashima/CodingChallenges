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
  let visitedNodes = []
  let result = []

  function traverse(node) {
    visitedNodes.push(node)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)

    if (!node.left && !node.right) {
      let str = ''
      let current = null
      while (visitedNodes.length !== 1) {
        current = visitedNodes.shift()
        str += `${current.val}->`
      }
      current = visitedNodes.shift()
      str += `${current.val}`
      result.push(str)
      visitedNodes = [root]
    }
  }

  traverse(root)

  return result
}