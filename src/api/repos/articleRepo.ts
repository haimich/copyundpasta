import { Article } from "@/interfaces/Article";
import { getConnection } from "../utils/knexUtil";

export async function getHeroArticles(): Promise<Article[]> {
  const knex = getConnection();

  const articles = await knex
    .table("articles")
    .select("*")
    .where("isHeroArticle", 1)
    .orderBy("createdAt", "desc");

  return articles;
}

export async function getArticles(): Promise<Article[]> {
  const knex = getConnection();

  const articles = await knex
    .table("articles")
    .select("*")
    .where("isHeroArticle", 0)
    .orderBy("createdAt", "desc");

  return articles;
}