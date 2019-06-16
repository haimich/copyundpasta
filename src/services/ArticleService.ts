import { Article } from "@/interfaces/Article";
import { AxiosPromise } from "axios";

export default class ArticleService {

  static getHeroArticles($axios): AxiosPromise<Article[]> {
    return $axios.post(`/api/articles/getHeroArticles`);
  }

  static getArticles($axios, page: number, pageSize: number): AxiosPromise<Article[]> {
    return $axios.post(`/api/articles/getArticles`, {
      page, pageSize
    });
  }

}