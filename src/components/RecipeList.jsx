import { recipes } from "./data.js";

// console.log(JSON.stringify(recipes, undefined, 4));

function GetTable() {
  const list = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  });

  return list;
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <GetTable />
    </div>
  );
}
