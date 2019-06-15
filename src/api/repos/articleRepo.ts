import { Article } from "@/interfaces/Article";
import { getConnection } from "../utils/knexUtil";
import { PagingParams } from "@/interfaces/Paging";
import { calculateOffset } from "../utils/pagingUtil";

export async function getHeroArticles(): Promise<Article[]> {
  const knex = getConnection();

  const articles = await knex
    .select("*")
    .table("articles")
    .where("isHeroArticle", 1)
    .orderBy("createdAt", "desc");

  return articles;
}

export async function getArticles(params: PagingParams): Promise<Article[]> {
  const knex = getConnection();

  const subselect = knex
    .count("*")
    .table("articles")
    .where("isHeroArticle", 0)
    .as("totalCount");

  const articles = await knex
    .select("*", subselect)
    .table("articles")
    .where("isHeroArticle", 0)
    .limit(params.pageSize)
    .offset(calculateOffset(params.page, params.pageSize))
    .orderBy("createdAt", "desc");

  return articles;
}