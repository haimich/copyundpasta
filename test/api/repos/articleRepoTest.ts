import { getNonHeroArticles, getHeroArticles } from "@/api/repos/articleRepo";

describe('getHeroArticles', () => {
    test('should return newest getHeroArticles', async () => {
        let articles = await getHeroArticles();

        // console.log(articles);
    });
    
});

describe('getNonHeroArticles', () => {
    test('should return newest getNonHeroArticles', async () => {
        let articles = await getNonHeroArticles({
            page: 0,
            pageSize: 10,
        });

        // console.log(articles);
    });
    
});
