/**
 * 21. Merge Two Sorted Lists
 * 
 * URL: https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Recursive
// var mergeTwoLists = function(l1, l2) {
//   if (l1.val > l2.val) {

//   }

//   return result
// }

// Iterative
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  let head = l1.val > l2.val ? l2 : l1
  let tail = head
  let currentL1 = l1
  let currentL2 = l2

  while (currentL1 && currentL2) {
    let temp

    if (currentL1.val > currentL2.val) {
      temp = currentL2
      currentL2 = currentL2.next
    } else {
      temp = currentL1
      currentL1 = currentL1.next
    }

    tail.next = temp
    tail = tail.next
  }

  while (currentL1) {
    tail.next = currentL1
    tail = tail.next
    currentL1 = currentL1.next
  }

  while (currentL2) {
    tail.next = currentL2
    tail = tail.next
    currentL2 = currentL2.next
  }

  return head
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(4)
node1.next = node2
node2.next = node3

const node4 = new ListNode(1)
const node5 = new ListNode(3)
const node6 = new ListNode(4)
node4.next = node5
node5.next = node6

// mergeTwoLists(node1, node4)

const node7 = new ListNode(3)
const node8 = new ListNode(4)
let head = node7
let tail = head
let temp = node8
tail.next = temp
tail = temp
console.log(JSON.stringify(head), 'head')
console.log(JSON.stringify(tail), 'tail')