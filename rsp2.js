var comHand;
var chooseHand = Math.random();

if (chooseHand < 0.33) {
    comHand = 'rock'
} else if (chooseHand < 0.66) {
    comHand = 'scissors'
} else {
    comHand = 'paper'
}

var userHand = 'paper'


var draw = 'Computer hand is ' + comHand + "!" + '\n' + 'Draw'
var win = 'Computer hand is ' + comHand + "!" + '\n' + 'Win'
var lose = 'Computer hand is ' + comHand + "!" + '\n' + 'Lose'

if (userHand == 'rock') {
    if (comHand == 'rock') {
        console.log(draw)
    } else if (comHand == 'scissors') {
        console.log(lose)
    } else {
        console.log(win)
    }
    
} else if (userHand == 'scissors') {
    if (comHand == 'rock') {
        console.log(lose)
    } else if (comHand == 'scissors') {
        console.log(draw)
    } else {
        console.log(win)
    }
} else {
    if (comHand == 'rock') {
        console.log(win)
    } else if (comHand == 'scissors') {
        console.log(lose)
    } else {
        console.log(draw)
    }
}