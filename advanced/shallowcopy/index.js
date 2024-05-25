/**
 * A shallow copy of an object is a copy whose properties share the same
 * references (point to the same underlying values) as those of the source
 * object from which the copy was made. As a result, when you change
 * either the source or the copy, you may also cause the other object to change too.
 */

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
// Re-assigning the value of a nested property will be visible in both objects.
ingredientsListCopy[1].list = ["rice", "flour", "water"];

ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
//Re-assigning the value of a top-level property (the 0 index in this case) will only be visible in the changed object.


console.log(ingredientsList);
console.log(ingredientsListCopy);