import Appbase from "appbase-js";
import {Recipe} from "@/interfaces/Recipe";

let searchAppbase = Appbase({
    url: "https://scalr.api.appbase.io",
    app: "copyundpasta",
    credentials: "Read-only Token"
})

export default class SearchService {

    static search(searchTerm: string) {
        return searchAppbase.search({
            type: "movies",

            body: {
                query: {
                    "match": {
                        "original_title": searchTerm
                    }

                }
            }
        })
    }

}
