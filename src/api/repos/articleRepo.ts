import { Article } from "@/interfaces/Article";
import { getConnection } from "../utils/knexUtil";
import { PagingParams } from "@/interfaces/Paging";
import { calculateOffset } from "../utils/pagingUtil";

export function getHeroArticles(): Promise<Article[]> {
  const knex = getConnection();

  return knex
    .select("*")
    .table("articles")
    .where("isHeroArticle", 1)
    .orderBy("createdAt", "desc");
}

export function getNonHeroArticles(params: PagingParams = null): Promise<Article[]> {
  const knex = getConnection();

  const subselect = knex
    .count("*")
    .table("articles")
    .where("isHeroArticle", 0)
    .as("totalCount");

  const dbObj = knex
    .select("*", subselect)
    .table("articles")
    .where("isHeroArticle", 0)
    .orderBy("createdAt", "desc");
  
  if (params != null) {
    dbObj
      .limit(params.pageSize)
      .offset(calculateOffset(params.page, params.pageSize));
  }

  return dbObj;
}

export function getAllArticles(): Promise<Article[]> {
  const knex = getConnection();

  return knex
    .select("*")
    .from("articles")
    .orderBy("createdAt", "desc");
}