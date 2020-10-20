// console.log('We outchea') // js connected


const SP_APP_KEY = '8c9f372da27b476eb93e564aeb0fd513'
const SPOON_API = `https://api.spoonacular.com/recipes/random?apiKey=${SP_APP_KEY}&reicpe=true`



const getRecipe = async () => {
    try {
        console.log('first')
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
        let recipeIngr = response.data.recipes[0].extendedIngredients[0].original
        // response.data.recipes[0].extendedIngredients[0].original make a forEach loop
        // for (const value of iterator) {
        //     console.log(value)
        // }
        let recipeInstructions = response.data.recipes[0].instructions

        // created display area
        let displayArea = document.querySelector('.recipe')
        //  created elements
        let postRecipe = document.createElement('div')
        let postTitle = document.createElement('h2')
        let postImg = document.createElement('img')
        let postTime = document.createElement('h3')
        let postServings = document.createElement('h3')
        let postSummary = document.createElement('p')
        let postInstructions = document.createElement('p')
        //  setting elements
        postRecipe.className = 'getRecipe'
        postTitle.innerText = recipeTitle
        postImg.innerHTML = recipeImg
        postTime.innerText = `Cook-time: ${recipeTime} mins`
        postServings.innerText = `Serves: ${recipeServings}`
        postSummary.innerHTML = recipeSum
        postInstructions.className = 'recipe-instructions'
        postInstructions.innerHTML = `<strong>Instructions:</strong> ${recipeInstructions}`
        //  appending to page
        postRecipe.appendChild(postTitle)
        postRecipe.appendChild(postImg)
        postRecipe.appendChild(postTime)
        postRecipe.appendChild(postServings)
        postRecipe.appendChild(postSummary)
        postRecipe.appendChild(postInstructions)
        displayArea.appendChild(postRecipe)
    } catch (error) {
        (error => console.log('Error', error))
    }
}

//  creating reset/clear
var clearElements = document.getElementById('clear-recipe');

function clearAll() {
    console.time("node.remove");
    clearElements.querySelectorAll('*').forEach(n => n.remove());
    console.timeEnd("node.remove");
}

let node = document.getElementById("clear-recipe");
node.querySelectorAll('*').forEach(n => n.remove());



document.querySelector('#search').addEventListener('click', getRecipe)
document.querySelector('#clear-all').addEventListener('click', clearAll)


// window.onload = getRecipe
