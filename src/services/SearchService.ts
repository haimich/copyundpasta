import { Client, ApiResponse } from "@elastic/elasticsearch";

const u_articles = "7WYvqhnKd";
const p_articles = "5cbcd002-203a-4532-905b-83af1abdbda5";

const articles = new Client({
    node: `https://${u_articles}:${p_articles}@scalr.api.appbase.io`,
});

export default class SearchService {

    static async searchArticles(searchTerm: string): Promise<ApiResponse> {
        return articles.search({
            index: "cup-articles",
            body: {
                query: {
                    "match": {
                        "title": searchTerm
                    }

                }
            }
        })
    }

}
