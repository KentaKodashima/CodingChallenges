/**
 * Arrays: Left Rotation
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * Arguments: A two dementional array sized 6 x 6
*/
function rotLeft(a, d) {
  let counter = 1
  while (counter <= d) {
    const val = a.shift()
    a.push(val)
    counter++
  }
  return a
}

console.log(rotLeft([1,2,3,4,5], 4))