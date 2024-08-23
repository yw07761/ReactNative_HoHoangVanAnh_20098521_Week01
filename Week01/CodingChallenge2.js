// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


// Ho Hoang Van Anh_20098521
// Data test 1
var mark_mass1 = 78;
var mark_height1 = 1.69;

var john_mass1 = 92;
var john_height1 = 1.95;

// Calculate BMIs
var calculateBMI = (mass, height) => mass / (height * height);

var mark_BMI1 = calculateBMI(mark_mass1, mark_height1);
var john_BMI1 = calculateBMI(john_mass1, john_height1);

// Compare BMIs and print result
if (mark_BMI1 > john_BMI1) {
    console.log("Mark's BMI (${mark_BMI1.toFixed(1)}) is higher than John's (${john_BMI1.toFixed(1)})!");
} else if (johnBMI1 > markBMI1) {
    console.log("John's BMI (${john_BMI1.toFixed(1)}) is higher than Mark's (${mark_BMI1.toFixed(1)})!");
} else {
    console.log("Mark and John have the same BMI!");
}