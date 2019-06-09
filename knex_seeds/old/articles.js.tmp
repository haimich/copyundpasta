
exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting articles");
  await knex("articles").del();

  console.log("Deleting comments");
  await knex("article_comments").del();
}

async function createAllEntries(knex) {
  console.log("Inserting articles");
  const articles = getArticles();
  await knex("articles").insert(articles);

  // get id of first article
  const firstArticle = await knex.table("articles").first("id");

  console.log("Inserting comments");
  const comments = [
    {
      articleId: firstArticle.id,
      content: "Awesomest Artikel dude!",
      email: "deine@mudda.de",
      author: "Deine Mudda",
      avatarUrl: "https://secure.gravatar.com/avatar/6c175b3a78050094bdb6895672832d9a?s=160&d=identicon&r=g 2x",
    },
  ];

  await knex("article_comments").insert(comments);
}

function getArticles() {
  return [
    {
      slug: "oma-hildas-dampfnudeln",
      categoryId: "suess",
      title: "Oma Hildas Dampfnudeln",
      shortDescription: "Bis jetzt habe ich mich und meinen Mann regelmäßig bei meinen Eltern eingeladen um dort in den Genuss von Dampfnudeln zu kommen. Aber warum habe ich die eigentlich nie selber gemacht? Wenn ich einen Teig wirklich gerne zubereite, dann ist es Hefeteig – was gibt es da näherliegendes als in die professionnelle Dampfnudelproduktion einzusteigen?",
      previewImageUrl: "https://recipecontent.fooby.ch/14006_3-2_480-320.jpg",
      author: "Michael Müller",
    },
  ]
}