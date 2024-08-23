// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Ho Hoang Van Anh _ 20098521

var mark_mass1 = 78;
var mark_height1 = 1.69;

var mark_mass2 = 95;
var mark_height2 = 1.88;

var john_mass1 = 92;
var john_height1 = 1.95;

var john_mass2 = 85;
var john_height2 = 1.76;

//2. Calculate BMIs
var mark_BMI1 = mark_mass1 / (mark_height1 ** 2);
var mark_BMI2 = mark_mass2 / (mark_height2 ** 2);

var john_BMI1 = john_mass1 / (john_height1 ** 2);
var john_BMI2 = john_mass2 / (john_height2 ** 2);

//3. Check if Mark has a higher BMI than John
var mark_HigherBMI1 = mark_BMI1 > john_BMI1;
var mark_HigherBMI2 = mark_BMI2 > john_BMI2;

// Print the results
console.log("Data 1:");
console.log("Mark's BMI:", mark_BMI1);
console.log("John's BMI:", john_BMI1);
console.log("Mark has a higher BMI than John:", mark_HigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", mark_BMI2);
console.log("John's BMI:", john_BMI2);
console.log("Mark has a higher BMI than John:", mark_HigherBMI2);