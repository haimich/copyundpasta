import { getArticles, getHeroArticles } from "@/api/repos/articleRepo";

describe('getHeroArticles', () => {
    test('should return newest getHeroArticles', async () => {
        let articles = await getHeroArticles();

        console.log(articles);
    });
    
});

describe('getArticles', () => {
    test('should return newest getArticles', async () => {
        let articles = await getArticles({
            page: 0,
            pageSize: 10,
        });

        console.log(articles);
    });
    
});
