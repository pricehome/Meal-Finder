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
		//  #6a add fetch
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
			.then(res => res.json())
			.then(data => {
				console.log(data)

				// #7 Results to DOM
				resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`

				//  #8 Make sure there is a valid choice in DB
				// If there is, results to DOM
				if (data.meals === null) {
					resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`
				} else {
					mealsEl.innerHTML = data.meals
						.map(
							meal => `
            <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="meal-info" data-mealID="${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
            </div>
          </div>`
						)
						// .join will return .map info as a string
						.join('')
				}
			})
		//  #9 Clear Search Results
		search.value = ''
	} else {
		alert('Please enter a search term')
	}
}
// EVENT LISTENERS
// #2 Submit Event Listener
submit.addEventListener('submit', searchMeal)
