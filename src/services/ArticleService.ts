import { Article } from "@/interfaces/Article";

export default class ArticleService {

  static getHeroArticles($axios): any {
    return $axios.post(`/api/articles/getHeroArticles`);
  }

  static getArticles($axios, page: number, pageSize: number): any {
    return $axios.post(`/api/articles/getArticles`, {
      page, pageSize
    });
  }

}