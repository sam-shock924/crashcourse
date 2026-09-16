/*
MOVIE TICKET PRICE CHECKER 🎟️

TARGETS:
- Let the user enter their age
- Let the user submit their age
- Determine the correct ticket price based on age

PRICING:
- Under 13: $8
- Ages 13–64: $14
- Ages 65+: $10

OUTPUT:
- Display the ticket price on the page
- Do not rely on the console for the final result

VALIDATION:
- Handle an empty or invalid input
- Tell the user to enter a valid age

BONUS:
- Reject impossible ages (example: negative numbers or 200)
*/
let userInput = document.getElementById('ageInput');
let ticketOutput = document.getElementById('output');
const button = document.getElementById('button');

button.addEventListener('click', checkPrices);

function checkPrices() {
	let checkedAge = parseFloat(userInput.value);
	console.log(isNaN(checkedAge));
	if (isNaN(checkedAge) === true) {
		ticketOutput.textContent = 'This is the part where you enter a number';
	} else if (checkedAge >= 0 && checkedAge <= 13) {
		ticketOutput.textContent = 'You scored an $8 ticket!';
	} else if (checkedAge >= 14 && checkedAge <= 64) {
		ticketOutput.textContent = "Oof, we're dropping $14...";
	} else if (checkedAge >= 65 && checkedAge <= 110) {
		ticketOutput.textContent = 'Perks of being older? $10 tix!';
	} else {
		ticketOutput.textContent = 'Nice try, now input a normal age';
	}
}
