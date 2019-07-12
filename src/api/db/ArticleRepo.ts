import { Article } from "@/interfaces/Article";
import { Comment } from "@/interfaces/Comment";
import KnexUtil from "../utils/KnexUtil";
import { PagingParams } from "@/interfaces/Paging";
import PagingUtil from "../utils/PagingUtil";
import _ from "lodash";

export default class ArticleRepo {

  public static getHeroArticles(): Promise<Article[]> {
    const knex = KnexUtil.getConnection();
  
    return knex
      .select("*")
      .table("articles")
      .where("isHeroArticle", 1)
      .orderBy("createdAt", "desc");
  }
  
  public static getNonHeroArticles(params: PagingParams = null): Promise<Article[]> {
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
  
  public static getAllArticles(): Promise<Article[]> {
    const knex = KnexUtil.getConnection();
  
    return knex
      .select("*")
      .from("articles")
      .orderBy("createdAt", "desc");
  }

  public static async getArticleComments(slug: string): Promise<Comment[]> {
    const knex = KnexUtil.getConnection();
  
    let comments = await knex
      .select("*")
      .table("article_comments")
      .where("articleSlug", slug)
      .orderBy("createdAt", "desc");
    
    if (comments == null || comments.length === 0) {
      return [];
    }

    let parentCommentsById = {};
    let childComments = [];

    for (let comment of comments) {
      if (comment.parentCommentId === null || comment.parentCommentId === undefined) {
        // parent
        comment.children = [];
        parentCommentsById[comment.id] = comment;
      } else {
        // child
        childComments.push(comment);
      }
    }

    for (let comment of childComments) {
      parentCommentsById[comment.parentCommentId].children.push(comment);
    }

    let parentComments: Comment[] = Object.values(parentCommentsById);

    // sort children
    for (let comment of parentComments) {
      comment.children = comment.children.sort(ArticleRepo.sortComments);
    }

    // sort parents
    return parentComments.sort(ArticleRepo.sortComments);
  }

  private static sortComments(a: Comment, b: Comment): number {
    let dateA: any = new Date(a.createdAt);
    let dateB: any = new Date(b.createdAt);

    return dateB - dateA;
  }

  public static createComment(comment: Comment): Promise<void> {
    const knex = KnexUtil.getConnection();

    let dbComment = _.clone(comment);

    dbComment.articleSlug = dbComment.slug;
    delete dbComment.slug;
  
    return knex
      .insert(dbComment)
      .into("article_comments");
  }
  
}
