// Lunch Spending Checker
// - User enters lunch price
// - $15 budget
// - Button checks the price
// - Use if/else to determine under/over budget
// - Display the result on the page
// - If over, show how much over
// - Bonus: handle empty input
let userInput = document.getElementById('lunchInput');
let response = document.getElementById('answer');
const maxAmount = 15;
const button = document.getElementById('submitButton');

function checkValue() {
	let value = parseFloat(userInput.value);
	if (value > maxAmount) {
		response.textContent = `Slow down, Mr. Moneybags...you're over budget by $${Math.abs(maxAmount - value)}`;
	} else if (value < maxAmount) {
		response.textContent = `Okay Mr. Frugal, I see you! You were under budget by $${Math.abs(value - maxAmount)}!`;
	} else if (value === maxAmount) {
		response.textContent = 'Right on the nose!';
	} else response.textContent = 'Sir, we need some data input from you';
}

button.addEventListener('click', checkValue);
