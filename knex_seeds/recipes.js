
exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting recipes_recipe_tags");
  await knex("recipes_recipe_tags").del();

  console.log("Deleting recipes");
  await knex("recipes").del();
}

async function createAllEntries(knex) {
  console.log("Inserting recipes");
  const recipes = getRecipes();
  await knex("recipes").insert(recipes);

  console.log("Inserting tags for recipes");
  // get id of first recipe
  const firstRecipe = await knex.table("recipes").first("id");

  const recipesRecipeTags = [
    {
      recipeId: firstRecipe.id,
      tagId: "resteverwertung",
    },
  ];
}

function getRecipes() {
  const servings = JSON.stringify({
    unit: "quantity",
    amount: 10,
  });

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
      {
        type: "step",
        content: "Hefeteig zubereiten und gehen lassen.",
      },
      {
        type: "step",
        content: "Dampfnudeln mit Mamas Bäckerknettechnik formen.",
      },
      {
        type: "step",
        content: "auf einem bemehlten Blech abermals gehen lassen.",
      },
      {
        type: "step",
        content: "Schmalz (oder Margarine) in einer gut verschließbaren Pfanne erhitzen.",
      },
      {
        type: "step",
        content: "nicht zu wenig Salz auf dem Pfannenboden verteilen.",
      },
      {
        type: "step",
        content: "Dampfnudeln hineinsetzen, eine Tasse heißes Wasser vorsichtig seitlich reinlaufen lassen.",
      },
      {
        type: "step",
        content: "Ca. 10 min. auf kleiner Flamme garen lassen."
      },
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
      categoryId: "herzhaft",
      previewImageUrl: "https://recipecontent.fooby.ch/14006_3-2_480-320.jpg",
      description: "Das Originalrezept meiner Uroma Hilda, das definitiv Eindruck bei euren Gästen macht!",
      servings,
      ingredients,
      directions,
      notes,
      ratings,
    },
  ]
}