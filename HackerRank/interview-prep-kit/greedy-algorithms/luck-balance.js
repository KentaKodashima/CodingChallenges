/**
 * Luck Balance
 * 
 * URL: https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 * Arguments: An integer, a 2D array
*/
function luckBalance(k, contests) {
  let max = 0, importantContents = []

  for (let i = 0; i < contests.length; i++) {
    max += contests[i][0]
    if (contests[i][1] === 1) importantContents.push(contests[i])
  }

  if (importantContents.length > k) {
    importantContents.sort((a, b) => a[0] - b[0])
    
    let counter = 0
    while (counter < importantContents.length - k) {
      max -= importantContents[counter][0] * 2
      counter++
    }
  }

  return max
}

let test = [
  [5,1],
  [4,0],
  [6,1],
  [2,1],
  [8,0]
]

let test2 = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]

console.log(luckBalance(2, test))
// console.log(luckBalance(3, test2))