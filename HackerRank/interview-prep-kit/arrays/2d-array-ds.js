/**
 * 2D Array - DS
 * 
 * URL: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * Arguments: A two dementional array sized 6 x 6
*/
function hourglassSum(arr) {
  let result, tempSum, firstRowSum, secondRowSum, thirdRowSum
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      firstRowSum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
      secondRowSum = arr[i+1][j+1]
      thirdRowSum = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
      tempSum = firstRowSum + secondRowSum + thirdRowSum

      /**
       * !result will be evaluated to be true when the result is 0
      */
      if (tempSum > result || result === undefined) {
        result = tempSum
      }
    }
  }

  return result
}

const sampleInput1 = [
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,1,2,4,4,0],
  [0,0,0,2,0,0],
  [0,0,1,2,4,0]
]

const testCase3 = [
  [-1,-1,0,-9,-2,-2],
  [-2,-1,-6,-8,-2,-5],
  [-1,-1,-1,-2,-3,-4],
  [-1,-9,-2,-4,-4,-5],
  [-7,-3,-3,-2,-9,-9],
  [-1,-1,-1,-2,-4,-5],
]

const testCase2 = [
  [-1,1,-1,0,0,0],
  [0,-1,0,0,0,0],
  [-1,-1,-1,0,0,0],
  [0,-9,2,-4,-4,0],
  [-7,0,0,-2,0,0],
  [0,0,-1,-2,-4,0]
]

// console.log(hourglassSum(sampleInput1))
// console.log(hourglassSum(testCase3))
console.log(hourglassSum(testCase2))