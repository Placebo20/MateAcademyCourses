/**
 * @param {number} N
 *
 * @returns {number[]}
 */
 function createArray(N) {
    let array = []
    if(N === 0){
      return array;
    }
    for(let i = 1; i <= N; i++){
      array.push(i);
    }
    return array;
  }

/**
 * @param {number} detailsCount
 * @param {string} robotPart
 *
 * @returns {string}[]
 */
 function makeStickers(detailsCount, robotPart) {
    let strArray = [];
    for(let i = 0; i < detailsCount; i++){
      strArray.push(`${robotPart} detail #${i+1}`);
      console.log(strArray[i]);
    }
    return strArray;
  }

/**
 * @param {number[]} currentPowers
 *
 * @returns {number[]}
 */
 function doublePower(currentPowers) {
    let result = [];
    for(let i = 0; i < currentPowers.length; i++){
      result.push(currentPowers[i]*2);
    }
    return result;
  }

/**
 * @param {number[]} boxNumbers
 *
 * @returns {boolean}
 */
 function isSorted(boxNumbers) {
    if(boxNumbers.length <= 1){
      return true;
    }
    for(let i = 0; i < boxNumbers.length; i++){
      if(boxNumbers.length === i+1){
        return true;
      }
      if(boxNumbers[i] > boxNumbers[i+1]){
        return false;
      }
    }
  }

/**
 * @param {number[]} coordinates
 * @param {string[]} commands
 *
 * @returns {number[]}
 */
 function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    for(let i = 0; i < commands.length; i++){
      switch(commands[i]){
        case 'left':
          x -= 1;
          break;
        case 'right':
          x += 1;
          break;
        case 'forward':
          y += 1;
          break;
        case 'back':
          y -= 1;
          break;
      }
    }
    coordinates[0] = x;
    coordinates[1] = y;
    return coordinates;
  }

  /**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 * @returns {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
    let array = [];
    let current = startProduction;
    for (let i = 0; i < numberOfMonths; i++) {
      current = Math.floor(current * (100 + percent) / 100);
      array.push(current);
    }
    return array;
  }

/**
 * @param {number[]} testResults
 *
 * @returns {number[]}
 */
 function getSpeedStatistic(testResults) {
    let all = [];
    if(testResults.length === 0){
      all.push(0);
      all.push(0);
      all.push(0);
      return all;
    }
    let min = testResults[0];
    let max = testResults[0];
    let quantity = testResults[0];
    for(let i = 1; i < testResults.length; i++){
      if(testResults[i] > max){
        max = testResults[i];
      }
      if(testResults[i] < min){
        min = testResults[i];
      }
      quantity += testResults[i];
    }
    all.push(min);
    all.push(max);
    all.push(Math.floor(quantity/testResults.length));
    return all;
  }

/**
 * @param {number[]} firstRobotResults
 * @param {number[]} secondRobotResults
 *
 * @returns {string}
 */
 function compareRobots(firstRobotResults, secondRobotResults) {
    let firstResult = 0;
    let secondResult = 0;
  
    for(let i = 0; i < firstRobotResults.length; i++){
      firstResult += firstRobotResults[i];
    }
    for(let i = 0; i < secondRobotResults.length; i++){
      secondResult += secondRobotResults[i];
    }
    console.log(firstResult);
    console.log(secondResult);
    if(firstResult > secondResult){
      return "First robot for sale!";
    } else if (secondResult > firstResult) {
      return "Second robot for sale!";
    } else {
      return "Both robots for sale!";
    }
  }

