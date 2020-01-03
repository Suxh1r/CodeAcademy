//The Kelvin value is not changing so we use const to define the value
const kelvin = 0
//Celcius is 273 less than Kelvin so we can just subtract from Kelvin
let celsius = kelvin - 273
// Conversion to F
let fahrenheit = celsius * 9/5 + 32
//Rounds the value 
console.log(Math.floor(fahrenheit));
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);

let Newton = celsius * 33/100
console.log(Math.floor(Newton));
console.log(`The temperature is ${Math.floor(Newton)} degrees Newton.`);