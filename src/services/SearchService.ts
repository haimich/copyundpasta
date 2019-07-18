import { AxiosPromise } from "axios";
import { Article } from "@/interfaces/Article";

export default class SearchService {

    static searchArticles($axios, searchterm: string): AxiosPromise<Article[]> {
        return $axios.post(`/api/search/articles`, {
            searchterm,
        });
    }

}
