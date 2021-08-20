/**
 * Marc's Cakewalk
 * 
 * URL: https://www.hackerrank.com/challenges/marcs-cakewalk/problem
*/

const reversedMerge = (arr1,arr2) => {
  let result = []
  let arr1Index = 0
  let arr2Index = 0

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr2[arr2Index])
      arr2Index++
    } else {
      result.push(arr1[arr1Index])
      arr1Index++
    }
  }

  while (arr1Index < arr1.length) {
    result.push(arr1[arr1Index])
    arr1Index++
  }

  while (arr2Index < arr2.length) {
    result.push(arr2[arr2Index])
    arr2Index++
  }

  return result
}

const reversedMergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = reversedMergeSort(arr.slice(0,mid))
  let right = reversedMergeSort(arr.slice(mid))
  return reversedMerge(left,right)
}

function marcsCakewalk(calorie) {
  let counter = 0
  let miles = 0
  let sortedCals = reversedMergeSort(calorie)
  for (let cal of sortedCals) {
    miles += 2 ** counter * cal
    counter++
  }
  return miles
}

marcsCakewalk([5,10,7])