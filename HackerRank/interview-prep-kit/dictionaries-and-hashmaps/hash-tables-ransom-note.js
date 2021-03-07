/**
 * Hash Tables: Ransom Note
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Arguments: An unordered array
*/
function checkMagazine(magazine, note) {
  const hashStr = (key, arrayLen=100) => {
    let total = 0
    // Used to reduce collisions
    // It should be divisible by 1
    let PRIME_NUM = 31 
    for (let char of key) {
      let val = char.charCodeAt(0) - 96
      total = (total * PRIME_NUM + val) % arrayLen
     }
     return total
  }

  let keyMap = []
}