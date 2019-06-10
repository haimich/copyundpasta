import { Article } from "@/interfaces/Article";
import { getConnection } from "../utils/knexUtil";

export async function getArticles(): Promise<Article[]> {
  const knex = getConnection();

  const articles = await knex
    .table("articles")
    .select("*")
    .orderBy("createdAt", "desc");

  return articles;
}