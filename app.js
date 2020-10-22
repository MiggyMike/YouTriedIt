console.log('We outchea')


const SP_APP_KEY = '8c9f372da27b476eb93e564aeb0fd513'
const SPOON_API = `https://api.spoonacular.com/recipes/random?apiKey=${SP_APP_KEY}&reicpe=true`


const getRecipe = async () => {
    try {
        const response = await axios.request(SPOON_API)

        let recipeTitle = response.data.recipes[0].title
        let recipeImg = response.data.recipes[0].image
        let recipeTime = response.data.recipes[0].readyInMinutes
        let recipeServings = response.data.recipes[0].servings
        let recipeSum = response.data.recipes[0].summary
        let recipeIngr = response.data.recipes[0].extendedIngredients
        let recipeInstructions = response.data.recipes[0].instructions

        let fullList = []
        recipeIngr.forEach(extendedIngredients => fullList.push(extendedIngredients.original))

        let newList = makeUL(fullList)
        console.log(`Listed Ingredients: ${newList}`)

        let displayArea = document.querySelector('.recipe')
        let postRecipe = document.createElement('div')
        let postTitle = document.createElement('h2')
        let postImg = document.createElement('img')
        let postTime = document.createElement('h3')
        let postServings = document.createElement('h3')
        let postSummary = document.createElement('p')
        let postIngredients = document.createElement('div')
        let postList = newList
        let postInstructions = document.createElement('p')

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


function makeUL(array) {
    let list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');

        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

var clearElements = document.getElementById('clear-recipe');

function clearAll() {
    console.time("node.remove");
    clearElements.querySelectorAll('*').forEach(n => n.remove());
    console.timeEnd("node.remove");
}



window.onload = getRecipe

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navbar-items");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        toggle.querySelector("i").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
    }
}

toggle.addEventListener("click", toggleMenu, false);


document.querySelector('#search').addEventListener('click', getRecipe)
document.querySelector('#search').addEventListener('click', clearAll)