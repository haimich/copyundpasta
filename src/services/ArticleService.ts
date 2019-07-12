import { AxiosPromise } from "axios";
import { Article } from "@/interfaces/Article";
import { Comment } from "@/interfaces/Comment";

export default class ArticleService {

  static getHeroArticles($axios): AxiosPromise<Article[]> {
    return $axios.post(`/api/articles/getHeroArticles`);
  }

  static getArticles($axios, page: number, pageSize: number): AxiosPromise<Article[]> {
    return $axios.post(`/api/articles/getArticles`, {
      page, pageSize
    });
  }

  static getComments($axios, slug: string): AxiosPromise<Comment[]> {
    return $axios.post(`/api/articles/getComments`, {
      slug,
    });
  }

  static createComment($axios, comment: Comment): AxiosPromise<void> {
    return $axios.post(`/api/articles/createComment`, comment);
  }

}