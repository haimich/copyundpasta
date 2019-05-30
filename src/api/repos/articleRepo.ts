import Article from "@/api/interfaces/Article";

export async function getHeroArticles(knex, id): Promise<Article> {
  const article = await knex
    .table("articles")
    .select("*")
    .whereIn("id", [
      1, 2, 3
    ]);

  return article;
}