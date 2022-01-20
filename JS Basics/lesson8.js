/**
 * @param {number} age
 *
 * @returns {string}
 */

// declare your function below

function canBuyBeer(age){
    if(age < 18){
      return 'You can not buy beer';
    }
    else {
      return 'You can buy beer';
    }
  }

  /**
 * @param {number} amount
 *
 * @returns {string}
 */
function getTipsRating(amount) {
    if(amount === 0){
      return 'terrible'
    }else if(amount >= 1 && amount <= 10){
      return 'poor'
    }else if(amount >= 11 && amount <= 20){
      return 'good'
    }else if(amount >= 21 && amount <= 50){
      return 'great'
    }else if(amount > 50){
      return 'excellent'
    }
  }

  /**
 * @param {number} income
 *
 * @returns {number}
 */
function calculateTaxes(income) {
    if(income <= 1000){
      return income * 0.02;
    } else if(income > 1000 && income <= 10000){
      return income * 0.03;
    } else {
      return income * 0.05;
    }
  }

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
// write code below this line

function getLargestExpressionResult(a, b){
    let buffer = 0;
    buffer = a + b;
    if(a - b > buffer){
      buffer = a - b;
    }
    if(a * b > buffer){
      buffer = a * b;
    }
    if(a / b > buffer){
      buffer = a / b;
    }
    return buffer;
  }
