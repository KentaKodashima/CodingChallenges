/**
 * 1323. Maximum 69 Number
 * 
 * URL: https://leetcode.com/problems/maximum-69-number/
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let max
  let numString = '' + num
  let numArr = numString.split('')

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '9')　{
      numArr[i] = '6'
    } else {
      numArr[i] = '9'
    }

    let newNumString = numArr.join('')
    let newNum = parseInt(newNumString)

    if (!max || max < newNum) max = newNum

    if (numArr[i] === '9')　{
      numArr[i] = '6'
    } else {
      numArr[i] = '9'
    }
  }

  if (max < num) max = num

  return max
}

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))
console.log(maximum69Number(9999))