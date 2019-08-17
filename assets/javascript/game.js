var wins = 0;
var losses = 0;
var totalScore = 0

function numberToGuess(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};

function redValue() {
    let val = Math.floor((Math.random() * 12 + 1));
    $("#redcrystal").attr('value', val)
    return val 
};

function greenValue() {
    let val = Math.floor((Math.random() * 12 + 1));
    $("#greencrystal").attr('value', val)
    return val 
}

function orangeValue() {
    let val =  Math.floor((Math.random() * 12 + 1));
    $('#orangecrystal').attr('value', val)
    return val 
}

function purpleValue() {
    let val =  Math.floor((Math.random() * 12 + 1));
    $('#purplecrystal').attr('value', val)
    return val 
}



function startGame() {
    randomChoice = numberToGuess(120, 19);
    redGem = redValue();
    greenGem = greenValue();
    orangeGem = orangeValue();
    purpleGem = purpleValue();
    totalScore = 0
    $("#numbertoguess-text").text(randomChoice);
    $("#totalscore-text").text(totalScore);
}

// call the start game in the beginnig 
startGame()


function win(){
    wins++;
    alert("You got it!");
    startGame();
}


function loose(){
    losses++;
    alert("You lose!");
    startGame();
}

// event listener on a class
$('.crystal').click( function(event) {
    value = $(this).attr('value')
    console.log(value)
    totalScore = parseInt(totalScore) + parseInt(value)

    if(totalScore == randomChoice){ 
        // call win function
        win()
    }
    if(totalScore > randomChoice){ 
        // call loose function
        loose()
    }

    $("#totalscore-text").text(totalScore);
})

/* 

$("#redcrystal").on('click', function() {
    totalScore = totalScore + redGem;
    if (totalScore === randomChoice) {
        wins++;
        alert("You got it!");
        startGame();
    } else if (totalScore > randomChoice) {
        losses++;
        alert("You lose!");
        startGame();
    };
    console.log(totalScore);
    $("#totalscore-text").text(totalScore);

});

$("#greencrystal").on('click', function() {
    totalScore = totalScore + greenGem;
    if (totalScore === randomChoice) {
        wins++;
        alert("You got it!");
        startGame();
    } else if (totalScore > randomChoice) {
        losses++;
        alert("You lose!");
        startGame();
    };
    console.log(totalScore);
    $("#totalscore-text").text(totalScore);

});

$("#orangecrystal").on('click', function() {
    totalScore = totalScore + orangeGem;
    if (totalScore === randomChoice) {
        wins++;
        alert("You got it!");
        startGame();
    } else if (totalScore > randomChoice) {
        losses++;
        alert("You lose!");
        startGame();
    };
    console.log(totalScore);
    $("#totalscore-text").text(totalScore);

});

$("#purplecrystal").on('click', function() {
    totalScore = totalScore + purpleGem;
    if (totalScore === randomChoice) {
        wins++;
        alert("You got it!");
        startGame();
    } else if (totalScore > randomChoice) {
        losses++;
        alert("You lose!");
        startGame();
    };
    console.log(totalScore);

    $("#totalscore-text").text(totalScore);

})
*/


console.log(randomChoice);
console.log(redGem);
console.log(greenGem);
console.log(orangeGem);
console.log(purpleGem);
console.log(totalScore);