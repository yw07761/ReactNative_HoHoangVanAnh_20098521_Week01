// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Ho Hoang Van Anh_20098521
// Data 1
var dolphinsScores1 = [96, 108, 89];
var koalasScores1 = [88, 91, 110];

// Calculate average scores
var calculateAverage = (scores) => scores.reduce((sum, score) => sum + score, 0) / scores.length;

var dolphinsAverage1 = calculateAverage(dolphinsScores1);
var koalasAverage1 = calculateAverage(koalasScores1);

// Bonus 1: Minimum score of 100
var minScore = 100;

if (dolphinsAverage1 >= minScore && dolphinsAverage1 > koalasAverage1) {
    console.log("Dolphins win with an average score of " + dolphinsAverage1);
} else if (koalasAverage1 >= minScore && koalasAverage1 > dolphinsAverage1) {
    console.log("Koalas win with an average score of " + koalasAverage1);
} else if (dolphinsAverage1 >= minScore && koalasAverage1 >= minScore && dolphinsAverage1 === koalasAverage1) {
    console.log("It's a draw with both teams having an average score of " + dolphinsAverage1);
} else {
    console.log("No team wins the trophy.");
}

// Data Bonus 2
var dolphinsScores2 = [97, 112, 101];
var koalasScores2 = [109, 95, 106];

var dolphinsAverage2 = calculateAverage(dolphinsScores2);
var koalasAverage2 = calculateAverage(koalasScores2);

// Bonus 2: Minimum score of 100 applies to draw
if (dolphinsAverage2 >= minScore && dolphinsAverage2 > koalasAverage2) {
    console.log("Dolphins win with an average score of " + dolphinsAverage2);
} else if (koalasAverage2 >= minScore && koalasAverage2 > dolphinsAverage2) {
    console.log("Koalas win with an average score of " + koalasAverage2);
} else if (dolphinsAverage2 >= minScore && koalasAverage2 >= minScore && dolphinsAverage2 === koalasAverage2) {
    console.log("It's a draw with both teams having an average score of " + dolphinsAverage2);
} else {
    console.log("No team wins the trophy.");
}