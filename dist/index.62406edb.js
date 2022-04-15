const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const ShowRecipe = async function() {
    try {
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        console.log(res, data);
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        let { recipe  } = data.data;
        recipe = {
            SourceUrl: recipe.source_url,
            Publisher: recipe.publisher,
            CookingTime: recipe.cooking_time,
            Id: recipe.id,
            Image: recipe.image_url,
            Title: recipe.title,
            Servings: recipe.servings,
            Ingredients: recipe.ingredients
        };
    } catch (err) {
        alert(err);
    }
};
ShowRecipe();

//# sourceMappingURL=index.62406edb.js.map
