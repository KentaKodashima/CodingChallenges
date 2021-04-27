/**
 * 234. Palindrome Linked List
 * 
 * URL: https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let current = head
  let arr = []
  let str = ''
  let str2 = ''

  while (current) {
    arr.push(current.val)
    str += current.val
    current = current.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    str2 += arr[i]
  }

  return str === str2
}