/**
 * Sorting: Bubble Sort
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Arguments: 
*/

function countSwaps(a) {
  const swap = (a, index1, index2) => {
    let temp = a[index1]
    a[index1] = a[index2]
    a[index2] = temp
  }

  let numSwaps = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1)
        numSwaps++
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}

countSwaps([3,2,1])