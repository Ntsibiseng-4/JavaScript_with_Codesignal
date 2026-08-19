// Candy Store: Calculate how many candies and lollipops you can buy with $10
const candyPrice = 2; // Price of one candy
const lollipopPrice = 1.5; // Price of one lollipop

let candies = Math.floor(10 / candyPrice); // Using Math.floor to buy the maximum whole candies
let remainingMoney = 10 - candies * candyPrice; // Calculating remaining money after buying candies
let lollipops = Math.floor(remainingMoney / lollipopPrice); // Buy as many lollipops as possible with the remainder
remainingMoney -= lollipops * lollipopPrice; // Calculate the money left after both purchases

console.log(
  "Candies:",
  candies,
  ", Lollipops:",
  lollipops,
  ", Remaining money:",
  remainingMoney,
);
