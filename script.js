// #1  Get DOM Elements
const search = document.getElementById('search'),
	submit = document.getElementById('submit'),
	random = document.getElementById('random'),
	mealsEl = document.getElementById('meals'),
	resultHeading = document.getElementById('result-heading'),
	single_mealEl = document.getElementById('single-meal')

//#3 Search meal and fetch API
function searchMeal(e) {
	// since it is a submit, need prevent default
	e.preventDefault()

	// #4 Clear single meal
	single_mealEl.innerHTML = ''

	// #5 Get Search Term
	const term = search.value

	// #6 Check for empty
	if (term.trim()) {
	} else {
		alert('Please enter a search term')
	}
}
// EVENT LISTENERS
// #2 Submit Event Listener
submit.addEventListener('submit', searchMeal)
