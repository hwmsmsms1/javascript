var a = ['rock', 'scissors','paper'];
var random_index = Math.floor(Math.random() * a.length);
var computer_choice = a[random_index];
console.log(computer_choice);

var user_choice = 'rock'
if (computer_choice == 'rock') {
    console.log('비겼습니다')
} else if (computer_choice == 'scissors') {
    console.log('이겼습니다')
} else {
    console.log('졌습니다')
}