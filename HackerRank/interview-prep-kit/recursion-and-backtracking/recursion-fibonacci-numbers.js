/**
 * Recursion: Fibonacci Numbers
 * 
 * URL: https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
 * Arguments: An integer
*/

/**
 * Tabulated solution
 * 
 * Time complexity: O(n)
 * Space complexity: Better than memoized version
*/
function fibonacci(n) {
  if (n <= 2) return 1
  let fibNums = [0,1,1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}

/**
 * Recursive version
 * 
 * Time complexity: O(2^n) - 2 to the nth power
*/
function recursiveFibonacci(n) {
  if (n === 1 || n === 2) return 1
  return fibonnaci(n - 1) + fibonnaci(n - 2)
}

/**
 * Memoized solution
 * 
 * Time complexity: O(n)
*/
function memoizedFibonacci(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n]
  let res = fibonnaci(n-1, memo) + fibonnaci(n-2, memo)
  memo[n] = res
  return res
}