/**
 * 242. Valid Anagram
 * 
 * URL: https://leetcode.com/problems/valid-anagram/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sCounter = {}
  let tCounter = {}
  let isAnagram = true
  
  for (let char of s) {
    if (sCounter[char]) {
      sCounter[char] += 1
    } else {
      sCounter[char] = 1
    }
  }

  for (let char of t) {
    if (tCounter[char]) {
      tCounter[char] += 1
    } else {
      tCounter[char] = 1
    }
  }

  if (Object.keys(sCounter).length !== Object.keys(tCounter).length) return false

  for (let key in sCounter) {
    if (sCounter[key] !== tCounter[key]) {
      isAnagram = false
      break
    }
  }

  return isAnagram
}