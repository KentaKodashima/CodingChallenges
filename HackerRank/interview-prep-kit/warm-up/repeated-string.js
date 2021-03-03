/**
 * Repeated String
 * 
 * URL: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * Arguments: An array
*/

function repeatedString(s, n) {
  let result = 0
  let aCountInWord = 0
  let howManyTimes = Math.floor(n / s.length)
  let remainder = n % s.length
  let current = 0
  
  while (current < s.length) {
    if (s[current] === 'a') {
      aCountInWord += 1
    }
    current++
  }

  console.log(aCountInWord, 'aCountInWord')

  current = 0
  while (current < remainder) {
    if (s[current] === 'a') {
      result += 1
    }
    current++
  }

  return result + (aCountInWord * howManyTimes)
}

// console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))