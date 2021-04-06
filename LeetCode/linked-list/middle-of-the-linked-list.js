/**
 * 876. Middle of the Linked List
 * 
 * URL: https://leetcode.com/problems/middle-of-the-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let sizeCounter = 1
  let counter = 1
  let current = head

  while (current.next) {
    current = current.next
    sizeCounter++
  }

  let middle = sizeCounter % 2 === 0 ?
               (sizeCounter / 2) + 1 :
               Math.ceil(sizeCounter / 2)
  current = head
  while (counter !== middle) {
    current = current.next
    counter++
  }

  return current
}