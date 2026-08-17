// Candy Store: Calculate how many candies and lollipops you can buy with $10
const candyPrice = 2; // Price of one candy
const lollipopPrice = 1.5; // Price of one lollipop

let candies = Math.floor(10 / candyPrice); // Using Math.floor to buy the maximum whole candies
let remainingMoney = 10 % candyPrice; // Calculating remaining money after the purchase

console.log("Candies:", candies, ", Remaining money:", remainingMoney);
