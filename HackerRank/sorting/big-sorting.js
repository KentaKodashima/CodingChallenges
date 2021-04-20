/**
 * Big Sorting
 * 
 * URL: https://www.hackerrank.com/challenges/big-sorting/problem
 * Arguments: An array
*/

function merge(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0

  // Compare the elements in each array and push them into the result array
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j].length === arr1[i].length) {
      // Using BigInt to handle big number that cannot be handled by parseInt()
      if (BigInt(arr2[j]) > BigInt(arr1[i])) {
        result.push(arr1[i])
        i++
      } else {
        result.push(arr2[j])
        j++
      }
    } else if (arr2[j].length > arr1[i].length) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  // Push the rest of arr1
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  // Push the rest of arr2
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

function bigSorting(unsorted) {
  if (unsorted.length <= 1) return unsorted
  let mid = Math.floor(unsorted.length / 2)
  // Split the array until it is separated
  let left = bigSorting(unsorted.slice(0, mid))
  let right = bigSorting(unsorted.slice(mid))
  // Recurrsively call the merge helper
  return merge(left, right)
}

console.log(bigSorting(['31415926535897932384626433832795', '1', '3', '10', '3', '5']))