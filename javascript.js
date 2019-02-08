// BEHOLD!
// * * *  T H E   F I Z Z   B U Z Z   C H A L L E N G E  * * *
// Part of the 2019 Stack Overflow developer survey was:
// "Have you ever been asked to solve the FizzBuzz challenge in an interview?"
// I did not. I thought maybe some surprising difficulty would arise...
// 
// nope.
// 
// But I feel like quite the champion for getting it right on first try! 🤣
// 
// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”."

const stopAt = 100;

for (let i = 1; i <= stopAt; i++) {
    let printThisIfNeeded = "";
    
    if (i%3===0) printThisIfNeeded += "Fizz"
    if (i%5===0) printThisIfNeeded += "Buzz"
    if (printThisIfNeeded === "") console.log(i)
    else console.log(printThisIfNeeded)
    
}
