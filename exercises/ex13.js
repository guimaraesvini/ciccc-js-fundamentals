/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Save your final answer in a variable called solution and print it to the console.
*/

let soluction = 1;

for(let number = 12; number >=1; number--){
    // console.log("number", number);
    soluction = number * soluction;
}
console.log("Soluction", soluction);