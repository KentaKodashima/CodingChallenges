/**
 * 206. Reverse Linked List
 * 
 * URL: https://leetcode.com/problems/reverse-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head
  let newPrev = head.next
  let newNext = null

  while (current.next) {
    newPrev = current.next
    current.next = newNext
    newNext = current
    current = newPrev
  }

  current.next = newNext

  return current
}