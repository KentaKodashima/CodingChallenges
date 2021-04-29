/**
 * 897. Increasing Order Search Tree
 * 
 * URL: https://leetcode.com/problems/increasing-order-search-tree/
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let visited = []

  const traverse = (node) => {
    if (node.left) traverse(node.left)
    visited.push(node)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  let node
  for (let i = 0; i < visited.length - 1; i++) {
    node = visited[i]
    node.left = null
    node.right = visited[i+1]
  }

  node = visited[visited.length-1]
  node.left = null
  node.right = null

  return visited[0]
}