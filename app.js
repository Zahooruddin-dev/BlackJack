let Cards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let messsage = '';
let playerName = "Zah"
let playerChips = 15
let player= { 
	Chips: 15,
	Name:"Zah"
}

let decision = document.getElementById('message-el');
let sumel = document.getElementById('sum-el');
let cardel = document.getElementById('card-el');
let playerel = document.getElementById("player-el").textContent = player.Name + ": $" + player.Chips
function startGame() {
	isAlive = true;
	let firstCard = randomCard();
	let secondCard = randomCard();
	Cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function randomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;

	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
}

function renderGame() {
	if (sum <= 20) {
		messsage = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		messsage = 'WINNER CHICKEN DINNER';
		blackJack = true;
	} else {
		messsage = 'LOSER';
		isAlive = false;
	}
	display();
}
function newCard() {
	if(isAlive===true &&  blackJack=== false){
	let newCard = randomCard();
	sum += newCard;
	Cards.push(newCard);
	cardel.textContent += Cards[2];
	renderGame();}
}

function display() {
	cardel.textContent = 'Cards: ';
	for (i = 0; i < Cards.length; i++) {
		cardel.textContent += Cards[i] + ' ';
	}
	decision.textContent = messsage;
	sumel.textContent = 'Sum ' + sum;
}
