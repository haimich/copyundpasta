import { AxiosPromise } from "axios";
import { Article } from "@/interfaces/Article";

export default class SearchService {

    static count($axios, type: "article", entityId: string): AxiosPromise<Article[]> {
        return $axios.post(`/api/stats/count`, {
            type,
            entityId,
        });
    }

}
