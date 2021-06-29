/**
 * 374. Guess Number Higher or Lower
 * 
 * URL: https://leetcode.com/problems/guess-number-higher-or-lower/
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let start = 1
  let end = n
  let middle = Math.floor(end / 2)

  while (start= end) {
    if (guess(middle) === 0) {
      return middle
    } else if (guess === -1) {
      end = middle - 1
      middle = Math.floor(end / 2)
    } else {
      start = middle + 1
      middle = Math.floor((start + end) / 2)
    }
  }
}