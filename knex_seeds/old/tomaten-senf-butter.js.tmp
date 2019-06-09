exports.seed = async function(knex, Promise) {
  await createAllEntries(knex);
};

async function createAllEntries(knex) {
  console.log("Inserting recipes");
  const recipes = getRecipes();
  await knex("recipes").insert(recipes);
}

function getRecipes() {
  const servings = JSON.stringify({
    unit: "gram",
    amount: 250,
  });

  const ingredients = JSON.stringify([
    {
      unit: "gram",
      amount: 250,
      name: "allerbeste Butter",
    },
    {
      unit: "el",
      amount: 3,
      name: "Senf (mittelscharf)",
    },
    {
      unit: "el",
      amount: 3,
      name: "Tomatenmark",
    },
    {
      unit: "el",
      amount: 1,
      name: "Tomami",
    },
    {
      unit: "el",
      amount: 2,
      name: "Sojasauce",
    },
    {
      unit: "tl",
      amount: 1,
      name: "Salz",
    },
    {
      unit: "tl",
      amount: 0.5,
      name: "Chilipulver",
    },
    {
      unit: "einige",
      name: "Basilikumblätter",
    },
  ]);

  const directions = JSON.stringify({
    steps: [
      {
        type: "step",
        content: "Die Butter etwa drei Stunder vor Zubereitung aus dem Kühlschrank nehmen. Sobald sie so warm ist, dass sie sich leicht cremig rühren lässt, alle Zutaten außer dem Basilikum einrühren.",
      },
      {
        type: "step",
        content: "Die Basilikumblätter in feine Streifen schneiden und unterheben und nach Belieben mit Chili schärfen.",
      },
    ]
  });

  const notes = "";
  const ratings = "";

  return [
    {
      title: "Tomaten-Senf-Butter",
      categoryId: "herzhaft",
      previewImageUrl: "https://schlaraffenwelt.de/wp-content/uploads/2018/03/3I7A1102-576x384.jpg",
      description: "Was ist die kulinarische DNA jedes guten Gerichts, fragte Ludwig Maurer vor einigen Tagen beim Fleischforum im Augsburg in die Runde der anwesenden Metzger (+ich). Seine simple Antwort: Es enhält salzige, süße, saure und scharfe Aromen. Als ich ein paar Tage später in der Küche stehe und einen meiner liebsten",
      servings,
      ingredients,
      directions,
      notes,
      ratings,
    },
  ]
}