/**
 * 559. Maximum Depth of N-ary Tree
 * 
 * URL: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
  const traverse = (node) => {
    if (!node) return 0
    let max = 0
    if (node.children.length !== 0) {
      for (let child of node.children) {
        max = Math.max(traverse(child), max)
      }
    }

    return max + 1
  }

  return traverse(root)
}