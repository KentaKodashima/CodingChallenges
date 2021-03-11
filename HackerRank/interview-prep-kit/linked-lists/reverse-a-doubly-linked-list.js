/**
 * Reverse a doubly linked list
 * 
 * URL: https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Arguments: None
*/
function reverse(head) {
  let current = head
  let next = null

  while (current) {
      next = current.next
      current.next = current.prev
      current.prev = next
      if (next === null) break
      current = next
  }
  
  return current
}