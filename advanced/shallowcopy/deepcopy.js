const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

ingredientsListDeepCopy[1].list = ["rice", "flour", "water"];

console.log(ingredientsList[1].list);