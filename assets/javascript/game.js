var wins = 0;
var losses = 0;
var totalScore = 0

function numberToGuess(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};

function redValue() {
    return Math.floor((Math.random() * 12 + 1));
};

function greenValue() {
    return Math.floor((Math.random() * 12 + 1));
}

function orangeValue() {
    return Math.floor((Math.random() * 12 + 1));
}

function purpleValue() {
    return Math.floor((Math.random() * 12 + 1));
}

var randomChoice = numberToGuess(120, 19);
var redGem = redValue();
var greenGem = greenValue();
var orangeGem = orangeValue(); 
var purpleGem = purpleValue();

function startGame() {
    numberToGuess(120, 19);
    redValue();
    greenValue();
    orangeValue();
    purpleValue();
}

$("#redcrystal").on('click', function(e) {
    return totalScore = totalScore + redGem;
});

$("#numbertoguess-text").text(randomChoice);
$("#totalscore-text").text(totalScore);

console.log(randomChoice);
console.log(redGem);
console.log(greenGem);
console.log(orangeGem);
console.log(purpleGem);