/**
 * Alternating Characters
 * 
 * URL: https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Arguments: A string
*/

function alternatingCharacters(s) {
  let count = 0
  let current = s[0]

  for (let i = 1; i < s.length; i++) {
    if (current === s[i]) {
      count++
    } else {
      current = s[i]
    }
  }

  return count
}