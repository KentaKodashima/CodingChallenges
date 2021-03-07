/**
 * Hash Tables: Ransom Note
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Arguments: two arrays of strings
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

  const set = (key, val, map) => {
    let index = hashStr(key)

    if (!keyMap[index]) {
      keyMap[index] = []
    }

    map[index].push([key, val])
  }

  const isReplicable = (key) => {
    const index = hashStr(key)

    if (keyMap[index]) {
      for (let i = 0; i < keyMap[index].length; i++) {
        if (keyMap[index][i][0] === key &&
            keyMap[index][i][1] === false) {
          keyMap[index][i][1] = true
          return true
        }
      }
    }

    return false
  }

  let keyMap = []
  for (let word of magazine) {
    set(word, false, keyMap)
  }
  
  for (let word of note) {
    if (isReplicable(word) === false) {
      return console.log('No')
    }
  }

  return console.log('Yes')
}

checkMagazine(['two','times','two','is','not','four'], ['two','times','two','is','four'])