/**
 * Minimum Absolute Difference in an Array
 * 
 * URL: https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 * Arguments: A string
*/
function merge(arr1, arr2) {
  let results = []
  let arr1Index = 0
  let arr2Index = 0

  // Push elements in a sorted order
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr2[arr2Index] > arr1[arr1Index]) {
      results.push(arr1[arr1Index])
      arr1Index++
    } else {
      results.push(arr2[arr2Index])
      arr2Index++
    }
  }

  // Push the rest of the array from arr1
  while (arr1Index < arr1.length) {
    results.push(arr1[arr1Index])
    arr1Index++
  }

  // Push the rest of the array from arr2
  while (arr2Index < arr2.length) {
    results.push(arr2[arr2Index])
    arr2Index++
  }

  return results
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function minimumAbsoluteDifference(arr) {
  let minDiff, temp
  let sortedArr = mergeSort(arr)

  for (let i = 0; i < sortedArr.length; i++) {
    temp = Math.abs(sortedArr[i] - sortedArr[i + 1])
    if (!minDiff || minDiff > temp) minDiff = temp
    if (minDiff === 0) return 0
  }

  return minDiff
}

// function minimumAbsoluteDifference(arr) {
//   let minimumDif, temp

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       temp = Math.abs(arr[i] - arr[j])
//       if (!minimumDif || minimumDif > temp) minimumDif = temp
//     }
//   }

//   return minimumDif
// }

// console.log(mergeSort([3,-1,5,8,8,-4,10,101,-8]))
console.log(Math.abs(1-1))