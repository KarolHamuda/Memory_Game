let count = 0;
const totalMoves = document.querySelector('.moves');
const restartGame = document.querySelector('.restart');
const checkCard = document.querySelectorAll('.deck li i', '.card');
let saveCardName = [];
let saveCardID = [];

const createElements = () => {
	for (let i=0; i<16; i++){
		saveCardID.push(checkCard[i].className);
		console.log(checkCard[i]);
	}
	shuffle(saveCardID);

	for (let i=0; i<16; i++){
		checkCard[i].className = saveCardID[i];
	}
}
createElements();

const matchCard = (checkCard, i) => {
	if (checkCard[i].parentElement.className === 'card') {
		checkCard[i].parentElement.className = 'card open show';
	}
	saveCardName.push(checkCard[i].className);
			
	if (saveCardName[0]===saveCardName[1]) {
		for (let j=0; j<16; j++){
			if (checkCard[j].className === saveCardName[1])
				checkCard[j].parentElement.className = 'card match';
						
		}
	saveCardName = [];
	count++;
	totalMoves.innerHTML = count;
	}
			
	else if (saveCardName[0]!==saveCardName[1] & saveCardName.length>=2){ 
		setTimeout(function () {
			for (let j=0; j<16; j++){
				if (checkCard[j].parentElement.className !== 'card match'){
						checkCard[j].parentElement.className = 'card';	
				}
			}
		},270)
	saveCardName = [];
	count++;
	totalMoves.innerHTML = count;
	}
}
 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Event Listeners
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

for (let i=0; i<16; i++) { 

	const myListener = () => matchCard(checkCard, i)
	const cardElement = checkCard[i].parentElement;
	cardElement.addEventListener("click", myListener, true);
}

restartGame.addEventListener("click", function() { 
	for (let i=0; i<16; i++) { 
		checkCard[i].parentElement.className = 'card';
		}
	count=0;
	totalMoves.innerHTML = count;
	saveCardName = [];

});