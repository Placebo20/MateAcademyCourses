// fix the infinite loop

function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }

function printNumbers(N) {
    for (let i = 1; i <= N; i = i + 1) {
      console.log(i);
    }
}

function printNumbersWithStep(N, step) {
    for (let i = 1; i <= N; i += step) {
      console.log(i);
    }
}

function printNumbersBackwards(N) {
    for(let i = N; i >= 1; i--){
      console.log(i)
    }
  }

/**
 * @param {number} numberOfGuests
 *
 * @returns {number}
 */
 function getDrinks(numberOfGuests) {
    let numberOfDrinks = 0
    for(let i = 1; i <= numberOfGuests; i++){
      numberOfDrinks += i
    }
    return numberOfDrinks
  }

/**
 * @param {number} numberOfGuests
 * @param {number} step
 *
 * @returns {number}
 */
 function getDrinksWithStep(numberOfGuests, step) {
    let drinks = 0;
    for(let i = 1; i <= numberOfGuests; i += step){
      drinks += i;
    }
    return drinks;
  }

/**
 * @param {number} amount
 * @param {number} percent
 * @param {number} period
 *
 * @returns {number}
 */
 function calculateProfit(amount, percent, period) {
    let fix = amount
      for(let i = 0; i < period; i++) 
          amount = amount / 100 * percent + amount
      return Math.round((amount - fix) * 100) / 100
  }