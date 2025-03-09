//Q1
console.log("Odd numbers from 1 to 20:");
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
//Q2
console.log("Multiples of 3 from 100 down to 0:");
for (let i = 100; i >= 0; i -= 3) {
    console.log(i);
}
//Q3
console.log("Given sequence:");
for (let i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}
//Q4
var sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sigma (sum of 1 to 100):", sum);

//Q5
var product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log("Factorial of 12:", product);
