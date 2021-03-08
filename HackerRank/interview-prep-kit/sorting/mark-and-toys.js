/**
 * Mark and Toys
 * 
 * URL: https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Arguments: An array, an integer
*/
function maximumToys(prices, k) {
  const merge = (arr1, arr2) => {
    let results = []
    let i = 0
    let j = 0
    // Loop until one of the arrays becomes empty
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i])
        i++
      } else {
        results.push(arr2[j])
        j++
      }
    }
    // Loop and add the elements left
    while (i < arr1.length) {
      results.push(arr1[i])
      i++
    }
    // Loop and add the elements left
    while (j < arr2.length) {
      results.push(arr2[j])
      j++
    }

    return results
  }

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

  let total = 0
  let current = 0
  let newTotal = 0
  
  const sortedPrices = mergeSort(prices)

  while (total < k && current < sortedPrices.length) {
    newTotal = total + sortedPrices[current]

    if (newTotal <= k) {
      total += sortedPrices[current]
      current++
    } else {
      break
    }
  }

  return current
}

// maximumToys([1,2,3,4], 7)
maximumToys([1,12,5,111,200,1000,10], 50)