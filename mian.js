const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeConrainer = document.querySelector('.recipe-conrainer');
const recipeDetalisContent = document.querySelector('.recipe_detalis_content');
const recipeClosesBtn = document.querySelector('.recipeCloseBtn');

const fetchRecip = async (query) => {
    recipeConrainer.innerHTML = "Fetching Recipe........";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    recipeConrainer.innerHTML = "";
    response.meals.forEach(meal => {

        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `

           <img src="${meal.strMealThumb}">
           <h3>${meal.strMeal}</h3>
           <h3><span>${meal.strArea}</span></h3>
           <h3>Belongs to <span>${meal.strCategory}</span> Category</h3>
        `
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        button.addEventListener('click', () => {
            openRecipePopup(meal);

        });
        recipeConrainer.appendChild(recipeDiv);

        button.addEventListener('click', () => {


        });


    });

}



searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchinput = searchBox.value.trim();
    fetchRecip(searchinput);


});