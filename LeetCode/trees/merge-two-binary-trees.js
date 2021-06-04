/**
 * 617. Merge Two Binary Trees
 * 
 * URL: https://leetcode.com/problems/merge-two-binary-trees/
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (root1 || root2) {
    let root1Val = root1 ? root1.val : 0
    let root2Val = root2 ? root2.val : 0
    let val = root1Val + root2Val
    let left, right

    if (root1 && root2) {
      left = mergeTrees(root1.left, root2.left)
      right = mergeTrees(root1.right, root2.right)
    } else if (root1) {
      left = mergeTrees(root1.left, null)
      right = mergeTrees(root1.right, null)
    } else if (root2) {
      left = mergeTrees(null, root2.left)
      right = mergeTrees(null, root2.right)
    }

    return new TreeNode(val, left, right)
  }

  return null
}