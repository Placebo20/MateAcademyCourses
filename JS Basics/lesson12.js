/**
 * @param {number} number
 *
 * @returns {boolean[]}
 */
 function checkNumber(number) {
    let isPositive = false;
    let isOdd = false;
    let isTen = false;
  
    let all = [];
  
    if(number > 0){
      isPositive = true;
    }
    if(number % 2 === 0){
      isOdd = true;
    }
    if(number % 10 === 0){
      isTen = true;
    }
    all.push(isPositive, isOdd, isTen);
    return all;
  }

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 *
 * @returns {number}
 */
 function getArraysSum(arr1, arr2) {
    let sum = 0;
    for(let i = 0; i < arr1.length; i++){
      sum += arr1[i];
    }
    for(let i = 0; i < arr2.length; i++){
      sum += arr2[i];
    }
    return sum;
  }

/**
 * @param {number[]} first
 * @param {number[]} second
 *
 * @returns {number[]}
 */
 function combineArrays(first, second) {
    let N = [];
    for(let i = 0; i < first.length; i++){
      N[i] = first[i] + second[i];
    }
    return N;
  }

