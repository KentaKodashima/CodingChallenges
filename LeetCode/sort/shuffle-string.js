/**
 * 1528. Shuffle String
 * 
 * URL: https://leetcode.com/problems/shuffle-string/
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let str = ''
  let sChars = []

  for (let i = 0; i < s.length; i++) {
    sChars[indices[i]] = s[i]
  }

  for (let i = 0; i < s.length; i++) {
    str += sChars[i]
  }

  return str
}

restoreString("codeleet",[4,5,6,7,0,2,1,3])