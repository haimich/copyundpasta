import {getArticles} from "@/api/repos/articleRepo";

describe('getArticles', () => {
    test('should return newest getArticles', async () => {
        let articles = await getArticles({
            page: 0,
            pageSize: 2,
        });

        console.log(articles);
    });
    
})
