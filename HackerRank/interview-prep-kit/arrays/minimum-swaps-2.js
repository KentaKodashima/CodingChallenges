/**
 * Minimum Swaps 2
 * 
 * URL: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * Arguments: An unordered array
*/

// Basically a selection sort
// Faling to pass test case 10 - 14 due to the "Time limit exceeded" error (10s)
function minimumSwaps(arr) {
  const swap = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  let smallestIndex, swapNum = 0
  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }

    if (smallestIndex !== i) {
      swap(arr, i, smallestIndex)
      swapNum++
    }
  }

  return swapNum
}

console.log(minimumSwaps([4,3,1,2]))
console.log(minimumSwaps([1,3,5,2,4,6,7]))