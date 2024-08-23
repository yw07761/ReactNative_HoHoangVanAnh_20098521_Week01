// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Ho Hoang Van Anh_20098521
// Test data
var billValues = [275, 40, 430];

// Loop through each bill value
billValues.forEach(bill => {
    // Calculate the tip using a ternary operator
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    // Calculate the total value
    var totalValue = bill + tip;

    // Print the result to the console
    console.log(billValues);
    console.log(tip);
    console.log(totalValue);
    console.log("The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value is ${totalValue.toFixed(2)}");
});