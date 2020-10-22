// console.log('We outchea') // js connected


const SP_APP_KEY = '8c9f372da27b476eb93e564aeb0fd513'
const SPOON_API = `https://api.spoonacular.com/recipes/random?apiKey=${SP_APP_KEY}&reicpe=true`


// collect JSON info
const getRecipe = async () => {
    try {
        const response = await axios.request(SPOON_API)
        // testing calls to api
        console.log('second')
        console.log(`title:`, response.data.recipes[0].title)
        console.log(`image:`, response.data.recipes[0].image)
        console.log(`time:`, response.data.recipes[0].readyInMinutes)
        console.log(`serves:`, response.data.recipes[0].servings)
        console.log(`summary:`, response.data.recipes[0].summary)
        console.log(`ingredietns:`, response.data.recipes[0].extendedIngredients[0].original)
        console.log(`instructions:`, response.data.recipes[0].instructions)
        // storing responses in variables
        let recipeTitle = response.data.recipes[0].title
        let recipeImg = response.data.recipes[0].image
        let recipeTime = response.data.recipes[0].readyInMinutes
        let recipeServings = response.data.recipes[0].servings
        let recipeSum = response.data.recipes[0].summary
        let recipeIngr = response.data.recipes[0].extendedIngredients
        let recipeInstructions = response.data.recipes[0].instructions

        //  consolidated all ingredients from line 28 to an array
        let fullList = []
        recipeIngr.forEach(extendedIngredients => fullList.push(extendedIngredients.original))

        //  converted fullList array to a ul list
        let newList = makeUL(fullList)
        console.log(`Listed Ingredients: ${newList}`)

        // created display area
        let displayArea = document.querySelector('.recipe')
        //  created elements
        let postRecipe = document.createElement('div')
        let postTitle = document.createElement('h2')
        let postImg = document.createElement('img')
        let postTime = document.createElement('h3')
        let postServings = document.createElement('h3')
        let postSummary = document.createElement('p')
        let postIngredients = document.createElement('div')
        let postList = newList
        let postInstructions = document.createElement('p')
        //  setting elements
        postRecipe.className = 'getRecipe'
        postTitle.className = `recipe-title`
        postTitle.innerText = recipeTitle
        postImg.className = `recipe-img`
        postImg.src = recipeImg
        postTime.className = `recipe-time`
        postTime.innerText = `Cook-time: ${recipeTime} mins`
        postServings.className = `recipe-servings`
        postServings.innerText = `Serves: ${recipeServings}`
        postSummary.className = `recipe-summary`
        postSummary.innerHTML = `<strong>About this Dish: </strong> ${recipeSum}`
        postIngredients.className = 'recipe-ingredients'
        postIngredients.innerHTML = '<strong>Ingredients:</strong>'
        postInstructions.className = 'recipe-instructions'
        postInstructions.innerHTML = ` <strong>Instructions:</strong> ${recipeInstructions} `
        //  appending to page
        postRecipe.appendChild(postTitle)
        postRecipe.appendChild(postImg)
        postRecipe.appendChild(postTime)
        postRecipe.appendChild(postServings)
        postRecipe.appendChild(postSummary)
        postRecipe.appendChild(postIngredients)
        postIngredients.appendChild(newList)
        postRecipe.appendChild(postInstructions)
        displayArea.appendChild(postRecipe)
    } catch (error) {
        (error => console.log('Error', error))
    }
}


//  function to turn array into list
function makeUL(array) {
    // Create the list element:
    let list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

//  creating reset/clear an function
var clearElements = document.getElementById('clear-recipe');

function clearAll() {
    console.time("node.remove");
    clearElements.querySelectorAll('*').forEach(n => n.remove());
    console.timeEnd("node.remove");
}


// Event Listeners
// load recipe
document.querySelector('#search').addEventListener('click', getRecipe)
// clear recipe
document.querySelector('#search').addEventListener('click', clearAll)


// window.onload = getRecipe

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navbar-items");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);