/**
 * 997. Find the Town Judge
 * 
 * URL: https://leetcode.com/problems/find-the-town-judge/
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  // Base case
  if (trust.length === 0 && N === 1) return 1

  let trustedFrom = {}
  let trustedPerson, isReal = true
  
  for (let i = 0; i < trust.length; i++) {
    let person = trust[i][0]
    let target = trust[i][1]

    if (!trustedFrom[target]) {
      trustedFrom[target] = [person]
    } else {
      trustedFrom[target].push(person)
    }
  }

  // Check if there is a person who is trusted from everyone else
  for (let i = 1; i <= N; i++) {
    if (trustedFrom[i] && trustedFrom[i].length === N - 1) trustedPerson = i
  }
  if (!trustedPerson) return -1

  // Check if the trustedPerson does not trust anyone
  for (let i = 1; i <= N; i++) {
    if (trustedPerson) {
      if (trustedFrom[i] && trustedFrom[i].includes(trustedPerson)) isReal = false
    }
  }

  if (trustedPerson && isReal) return trustedPerson

  return -1
}