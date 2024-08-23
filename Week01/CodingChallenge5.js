// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Ho Hoang Van Anh_20098521

// Calculate the average of 3 scores
var calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Function to check the winner
var checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})");
    } else {
        console.log("No team wins!");
    }
};

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