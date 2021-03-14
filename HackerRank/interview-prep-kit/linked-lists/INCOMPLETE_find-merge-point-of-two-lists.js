/**
 * Find Merge Point of Two Lists
 * 
 * URL: https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Arguments: The heads of the two lists
*/
function findMergeNode(headA, headB) {
  let first = headA
  let second = headB
  let refs = []

  while (first) {
    refs.push(first)
    first = first.next
  }

  for (let i = 0; i < refs.length; i++) {
    if (refs[i] === second) return second.data
    if (second) second = second.next
  }

  // let firstObj = {}

  // while (first) {
  //   firstObj[first.data] = true
  //   first = first.next
  // }

  // while (second) {
  //   if (firstObj[second.data] && second.data !== 1) return second.data
  //   second = second.next
  // }
}