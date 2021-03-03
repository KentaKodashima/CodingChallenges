/**
 * Jumping on the Clouds
 * 
 * URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * Arguments: An array
*/

function jumpingOnClouds(c) {
  let current = 0
  let counter = 0
  while (current < c.length - 1) {
    if (c[current+2] === 0) {
      current += 2
    } else {
      current += 1
    }
    counter++
  }
  return counter
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
// console.log(jumpingOnClouds([0,0,0,1,0,0]))