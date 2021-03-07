/**
 * Two Strings
 * 
 * URL: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Arguments: Two strings
*/
function twoStrings(s1, s2) {
  let dict = {}

  for (let char of s1) {
    dict[char] = true
  }

  for (let char of s2) {
    if (dict[char]) return 'YES'
  }

  return 'NO'
}