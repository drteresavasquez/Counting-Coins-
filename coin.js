/*

  Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

*/

let userInput = prompt("List an amount you want to tell the amount of coins you need. (eg: 5.22) ");
let change = document.getElementById("coinPurse");

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  let coinPurse = {};

      let cash = userInput;
      cash *=100;

      //this is simple math. You divide the total by the value of the coin and make it a whole number. THEN, multiply the whole number by the value and subtract it from the total of cash so that the left over change can run thorugh all of the coins until there are none left.
      let quarters = parseInt(cash/25);
      cash = cash - (quarters * 25);
      let dimes = parseInt(cash/10);
      cash = cash - (dimes * 10);
      let nickels = parseInt(cash/5);
      cash = cash - (nickels * 5);
      let pennies = parseInt(cash/1);

      //This adds the number of whole numbers (coins) to the open object above.
      coinPurse.quarters = quarters;
      coinPurse.dimes = dimes;
      coinPurse.nickels = nickels;
      coinPurse.pennies = pennies;

      //this adds the totals to the HTML
      change.innerHTML += `<h1>Get Your Change, Yo!</h1>`
      change.innerHTML += `<li>Quarters: ${coinPurse.quarters}</li>`
      change.innerHTML += `<li>Dimes: ${coinPurse.dimes}</li>`;
      change.innerHTML += `<li>Nickels: ${coinPurse.nickels}</li>`;
      change.innerHTML += `<li>Pennies: ${coinPurse.pennies}</li>`;

}

coinCounter();





