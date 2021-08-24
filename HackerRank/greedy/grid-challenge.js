/**
 * Grid Challenge
 * 
 * URL: https://www.hackerrank.com/challenges/grid-challenge/problem
*/

const merge = (arr1,arr2) => {
  let i = 0
  let j = 0
  let result = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j])
      j++
    } else {
      result.push(arr1[i])
      i++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

function gridChallenge(grid) {
  let rows = []
  let cols = []

  for (let row of grid) {
    rows.push(mergeSort(row).join(''))
    // console.log(mergeSort(row).join(''),'row')
  }

  for (let row of rows) {
    for (let i = 0; i < row.length; i++) {
      if (!cols[i]) {
        cols[i] = row[i]
      } else {
        cols[i] += row[i]
      }
    }
  }

  console.log(rows.toString())

  for (let col of cols) {
    let str = mergeSort(col).join('')
    console.log(str,'str')
    console.log(col,'col')
    if (str !== col) return 'NO'
  }

  return 'YES'
}

// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
console.log(gridChallenge(['ppp', 'ypp', 'wyw']))
console.log(gridChallenge(['tjxxx', 'xtxxj', 'rzzzz', 'zzrzz', 'rzzzz']))
// console.log(gridChallenge(['lyivr', 'jgfew', 'uweor', 'qxwyr', 'uikjd']))