/**
 * Inserting a Node Into a Sorted Doubly Linked List
 * 
 * URL: https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Arguments: The head of the list, an integer
*/
function sortedInsert(head, data) {
  let current = head.next
  let newNode = new DoublyLinkedListNode(data)

  if (!head) return newNode

  if (newNode.data < head.data) {
    head.prev = newNode
    newNode.next = head

    return newNode
  }

  while (current.next) {
    if (newNode.data > current.data && newNode.data < current.next.data) {
      current.next = newNode
      newNode.prev = current
      newNode.next = current.next
      current.next.prev = newNode
      break
    }
    current = current.next
  }

  if (newNode.data > current.data && !current.next) {
    current.next = newNode
    newNode.prev = current
  }

  return head
}