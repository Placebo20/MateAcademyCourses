let amount = 18;
let cookiePrice = 7;
let candyPrice = 8;

amount -= cookiePrice;

console.log("Amount is", amount);

const hasEnoughMoney = amount >= candyPrice;

console.log('has enough money', hasEnoughMoney);

if(hasEnoughMoney){
    console.log('I have enough money');
} else {
    console.log('I do not have enough money');
}

const x = 10;
console.log(x)

const type = typeof x;
console.log(type);