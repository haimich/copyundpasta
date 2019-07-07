import { Article } from "@/interfaces/Article";
import KnexUtil from "../utils/KnexUtil";
import { PagingParams } from "@/interfaces/Paging";
import PagingUtil from "../utils/PagingUtil";

export function getHeroArticles(): Promise<Article[]> {
  const knex = KnexUtil.getConnection();

  return knex
    .select("*")
    .table("articles")
    .where("isHeroArticle", 1)
    .orderBy("createdAt", "desc");
}

export function getNonHeroArticles(params: PagingParams = null): Promise<Article[]> {
  const knex = KnexUtil.getConnection();

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
      .offset(PagingUtil.calculateOffset(params.page, params.pageSize));
  }

  return dbObj;
}

export function getAllArticles(): Promise<Article[]> {
  const knex = KnexUtil.getConnection();

  return knex
    .select("*")
    .from("articles")
    .orderBy("createdAt", "desc");
}