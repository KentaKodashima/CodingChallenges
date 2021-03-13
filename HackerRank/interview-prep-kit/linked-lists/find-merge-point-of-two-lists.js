/**
 * Find Merge Point of Two Lists
 * 
 * URL: https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Arguments: The heads of the two lists
*/
function findMergeNode(headA, headB) {
  let first = headA
  let second = headB

  while (first.next && second.next) {
    if (first.next.data === second.next.data) {
      return first.next.data
    } else if (first.data === second.next.data) {
      return first.data
    } else if (first.next.data === second.data) {
      return second.data
    }
    
    first = first.next
    second = second.next
  }
}