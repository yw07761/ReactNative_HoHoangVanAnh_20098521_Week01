// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// Hồ Hoàng Vân Anh _ 20098521
// Create objects for Mark and John
var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Calculate BMIs and store them in the objects
mark.calcBMI();
john.calcBMI();

console.log("mark.bmi: " + mark.bmi);
console.log("john.bmi: " + john.bmi);

// Compare and log BMIs
if (mark.bmi > john.bmi) {
    console.log("$${mark.fullName}'s BMI ($${mark.bmi.toFixed(1)}) is higher than $${john.fullName}'s ($${john.bmi.toFixed(1)})!");
} else if (john.bmi > mark.bmi) {
    console.log("$${john.fullName}'s BMI ($${john.bmi.toFixed(1)}) is higher than $${mark.fullName}'s ($${mark.bmi.toFixed(1)})!");
} else {
    console.log("$${mark.fullName} and $${john.fullName} have the same BMI ($${mark.bmi.toFixed(1)})!");
}