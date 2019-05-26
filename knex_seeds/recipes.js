
exports.seed = async function(knex, Promise) {
  console.log("Deleting ALL existing entries");

  // recipes
  await knex("recipes").del();

  // child categories
  await knex("recipe_categories")
    .whereNotNull("parentCategory")
    .del();

  // remaining categories
  await knex("recipe_categories").del();

  console.log("Inserting recipe categories");
  const recipeCategories = getRecipeCategories();
  await knex("recipe_categories").insert(recipeCategories);

  console.log("Inserting recipes");
  const recipes = getRecipes();
  await knex("recipes").insert(recipes);
};

function getRecipeCategories() {
  return [
    {
      id: "herzhaft",
      name: "Herzhaft",
    },
    {
      id: "pizza",
      name: "Pizza",
    },
    {
      id: "flammkuchen",
      name: "Flammkuchen",
      parentCategory: "pizza",
    },
    {
      id: "pasta",
      name: "Pasta",
    },
    {
      id: "brot",
      name: "Brot",
    },
  ]
}

function getRecipes() {
  const ingredients = JSON.stringify([
    {
      unit: "gram",
      amount: 500,
      name: "Mehl",
    },
    {
      unit: "gram",
      amount: 30,
      name: "Hefe",
    },
    {
      unit: "gram",
      amount: 30,
      name: "Zucker",
    },
    {
      unit: "quantity",
      amount: 2,
      name: "Eier",
    },
    {
      unit: "liter",
      amount: 0.25, // display as 1/4!
      name: "Milch",
    },
    {
      name: "Salz",
    },
    {
      unit: "gram",
      amount: 80,
      name: "Butter",
    },
  ]);

  const directions = JSON.stringify({
    steps: [
      "Hefeteig zubereiten und gehen lassen.",
      "Dampfnudeln mit Mamas Bäckerknettechnik formen",
      "auf einem bemehlten Blech abermals gehen lassen",
      "Schmalz (oder Margarine) in einer gut verschließbaren Pfanne erhitzen",
      "nicht zu wenig Salz auf dem Pfannenboden verteilen",
      "Dampfnudeln hineinsetzen, eine Tasse heißes Wasser vorsichtig seitlich reinlaufen lassen",
      "ca. 10 min. auf kleiner Flamme garen lassen"
    ]
  });

  const notes = JSON.stringify([
    "Die Dampfnudeln sind fertig, wenn es im Topf knistert (dann ist das gesamte Wasser verdampft)",
  ]);

  const ratings = JSON.stringify([
    {
      date: 1558877368,
      value: 4.5,
    },
    {
      date: 1558877368,
      value: 5,
    },
  ]);

  return [
    {
      title: "Oma Hilda's Dampfnudeln",
      description: "Das Originalrezept meiner Uroma Hilda, das definitiv Eindruck bei euren Gästen macht!",
      categoryId: "herzhaft",
      ingredients,
      directions,
      notes,
      ratings,
    },
  ]
}