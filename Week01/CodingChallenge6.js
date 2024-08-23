// Coding Challenge #5
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.


// Ho Hoang Van Anh - 20098521
// Function to calculate the tip
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

// Test the function with a bill value of 100
var billValue = 100;
var tipValue = calcTip(billValue);
console.log("The tip for a bill of $${billValue} is $${tipValue}");

// Create an array of bill values
var bills = [125, 555, 44];

// Create an array of tip values calculated from the 'calcTip' function
var tips = bills.map(calcTip);

// Create an array of total values (bill + tip)
var total = bills.map(bill => bill + calcTip(bill));

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);

// Data 1
var dolphinsScores1 = [44, 23, 71];
var koalasScores1 = [65, 54, 49];

var avgDolphins1 = calcAverage(...dolphinsScores1);
var avgKoalas1 = calcAverage(...koalasScores1);

checkWinner(avgDolphins1, avgKoalas1);

// Data 2
var dolphinsScores2 = [85, 54, 41];
var koalasScores2 = [23, 34, 27];

var avgDolphins2 = calcAverage(...dolphinsScores2);
var avgKoalas2 = calcAverage(...koalasScores2);

checkWinner(avgDolphins2, avgKoalas2);