/**
 * @param {string} input
 *
 * @returns {number}
 */
 function getStringLength(input) {
    return input.length;
  }

/**
 * @param {string} input
 *
 * @returns {number}
 */
 function getStringLength(input) {
    return input.length;
  }

/**
 * @param {string} text
 *
 * @returns {number}
 */
 function countMs(text) {
    let lowerText = text.toLocaleLowerCase();
    let count = 0
    for(let i = 0; i < text.length; i++){
      if (lowerText[i] == 'm'){
        count++;
      }
    }
    return count;
  }

/**
 * @param {string} doc
 *
 * @returns {string}
 */
 function removeVowels(doc) {
    let removedVowels = "";
    for(let i = 0; i < doc.length; i++){
      let temp = doc[i].toLocaleLowerCase();
      if(temp !== 'a' && 
      temp !== 'e' && 
      temp !== 'i' && 
      temp !== 'o' && 
      temp !== 'u' &&
      temp !== 'y'){
        removedVowels += doc[i];
      }
    }
  
    return removedVowels;
  }

/**
 * @param {string} words
 *
 * @returns {string}
 */
 function makeAbbr(words) {
    let abbr = words[0];
    for(let i = 0; i < words.length; i++){
      if(words[i] === ' ')
        abbr += words[i+1]
    }
    return abbr.toLocaleUpperCase();
  }

/**
 * @param {string} message
 *
 * @returns {string}
 */
 function decryptMessage(message) {
    let decrypted = "";
    for(let i = message.length - 1; i >= 0; i--){
      decrypted += message[i];
    }
  
    return decrypted;
  }

/**
 * @param {string} statistic
 *
 * @returns {number}
 */
 function getSuccessRate(statistic) {
    let good = 0;
    let notgood = 0;
    for(let num of statistic){
      if(num == '1'){
        good++;
      }
    }
    notgood = statistic.length - good;
    if(good === 0){
      return 0;
    }
    return Math.round(good * 100 / statistic.length);
  }