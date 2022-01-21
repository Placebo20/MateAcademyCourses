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

/**
 * @param {string} str
 *
 * @returns {string[]}
 */
function splitString(str) {
  let resultStr = [];
  let lastChar = '';
  if(str.length % 2 !== 0){
    lastChar = str[str.length - 1];
    str = str.substring(0, str.length - 1);
  }
  
  for(let i = 0; i < str.length; i += 2){
    resultStr.push(str.substring(i, i+2));
  }
  
  if(lastChar.length !== 0){
    resultStr.push(lastChar + '_');
  }
  return resultStr;
}

/**
 * @param {string} word
 *
 * @returns {string[]}
 */
 function scrollingText(word) {
  let result = []
  result.push(word.toLocaleUpperCase());
  for(let i = 0; i < word.length - 1; i++){
    word += word[0];
    word = word.substr(1, word.length);
    result.push(word.toLocaleUpperCase());
  }
  return result;
}

/**
 * @param {number} n
 *
 * @returns {string}
 */
 function isSpecialNumber(n) {
  let flag = false;
  for(let i = 0; i < n.toString().length; i++){
    switch(n.toString()[i]){
      case '0':
        flag = true;
        break;
      case '1':
        flag = true;
        break;
      case '2':
        flag = true;
        break;
      case '3':
        flag = true;
        break;
      case '4':
        flag = true;
        break;
      case '5':
        flag = true;
        break;
      default:
        flag = false;
        break;
    }
    if(flag === false){
      break;
    }
  }
  if(flag === true){
    return "Special!!";
  }
  else {
    return "NOT!!"
  }
}

/**
 * @param {integer} number
 *
 * @returns {boolean}
 */
 function isTidy(number) {
  let numStr = number.toString();
  for(let i = 1; i < numStr.length; i++){
    if(numStr[i-1] > numStr[i]){
      return false;
    }
  }
  return true;
}

/**
 * @param {number} number
 *
 * @returns {string}
 */
 function isJumping(number) {
  let numStr = number.toString();
  let flag = false;
  if(numStr.length !== 1){
    for(let i = 1 ; i < numStr.length; i++){
      if(Math.abs(numStr[i] - numStr[i - 1]) === 1){
        flag = true;
        console.log(numStr[i-1])
      }
      else {
        flag = false;
        break;
      }
    }
  } else {
    flag = true;
  }
  if(flag){
    return 'JUMPING';
  } else {
    return 'NOT JUMPING';
  }
}