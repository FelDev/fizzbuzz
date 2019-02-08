const stopAt = 100;

for (let i = 1; i <= stopAt; i++) {
    let printThisIfNeeded = "";
    
    if (i%3===0) printThisIfNeeded += "Fizz"
    if (i%5===0) printThisIfNeeded += "Buzz"
    if (printThisIfNeeded === "") console.log(i)
    else console.log(printThisIfNeeded)
    
}
