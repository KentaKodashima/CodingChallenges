/**
 * Strings: Making Anagrams
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Arguments: An integer
*/
function makeAnagram(a, b) {
  let objA = {}
  let objB = {}
  let total = 0

  for (let char of a) {
    if (!objA[char]) {
      objA[char] = 1
    } else {
      objA[char] += 1
    }
  }

  for (let char of b) {
    if (!objB[char]) {
      objB[char] = 1
    } else {
      objB[char] += 1
    }
  }

  for (let key in objA) {
    if (!objB[key]) {
      total += objA[key]
    } else if (objB[key] !== objA[key]) {
      total += Math.abs(objA[key] - objB[key])
    }
  }

  console.log(JSON.stringify(objA))
  console.log(JSON.stringify(objB))

  for (let key in objB) {
    if (!objA[key]) total += objB[key]
  }
  
  return total
}

// makeAnagram('showman', 'woman')
// makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
makeAnagram('bugexikjevtubidpulaelsbcqlupwetzyzdvjphn', 'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk')