/*eslint-env browser*/

function Recipe(title, servings, ingredients) {
    "use strict";
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
}
Recipe.prototype.displayCard = function () {
    "use strict";
    window.console.log(this.title);
    window.console.log("Serves: " + this.servings);
    window.console.log("Ingredients: ");
    for (var i = 0; i < this.ingredients.length; i++) {
        window.console.log("-" + this.ingredients[i]);
    }
}

var myRecipe = new Recipe("Wonton", 20, ["2 pkgs wonton skins", "2 lbs ground pork", "8 oz water chestnuts", "8 oz shrimp", "8 oz mushrooms", "1 bunch green onions", "1 egg", "2 tsp soy sauce", "2 tsp cornstarch"]);
myRecipe.displayCard();