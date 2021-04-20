/**
 * 1710. Maximum Units on a Truck
 * 
 * URL: https://leetcode.com/problems/maximum-units-on-a-truck/
*/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// Bubbdle sort ver
var maximumUnits = function(boxTypes, truckSize) {
  let count = 0
  let result = 0

  const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  for (let i = boxTypes.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (boxTypes[j][1] < boxTypes[j+1][1]) swap(boxTypes, j, j+1)
    }
  }

  for (let i = 0; i < boxTypes.length; i++) {
    let newCount = count + boxTypes[i][0]
    
    if (count < truckSize) {
      if (newCount > truckSize) {
        let countLeft = truckSize - count
        count += countLeft
        result += boxTypes[i][1] * countLeft
      } else {
        count += boxTypes[i][0]
        result += boxTypes[i][0] * boxTypes[i][1] 
      }
    }

    if (newCount > truckSize) break
  }

  return result
}

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4))
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))