/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== "undefined" && module.exports) {
  module.exports = getChange; // allows CommonJS/Node.js require()
}

const COINS = [200, 100, 50, 20, 10, 5, 2, 1];

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // [50, 20, 10, 5]
 */
function getChange(totalPayable, cashPaid) {
  "use strict";

  // const difference = cashPaid - totalPayable;
  // const change = [];

  // COINS.forEach(coin => {
  //   while (difference >= coin) {
  //     change.push(coin);
  //     difference -= coin;
  //   }
  // });

  // return change;

  return COINS.reduce((change, coin) => {
    const changeSum = change.reduce((sum, coin) => sum + coin, 0);
    const remaining = cashPaid - totalPayable - changeSum;
    const timesCoinFits = Math.floor(remaining / coin);
    return change.concat(Array(timesCoinFits).fill(coin));
  }, []);
}
