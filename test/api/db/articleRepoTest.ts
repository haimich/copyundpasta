import ArticleRepo from "@/api/db/articleRepo";

describe('getHeroArticles', () => {
    test('should return newest getHeroArticles', async () => {
        let articles = await ArticleRepo.getHeroArticles();

        // console.log(articles);
    });
    
});

describe('getNonHeroArticles', () => {
    test('should return newest getNonHeroArticles', async () => {
        let articles = await ArticleRepo.getNonHeroArticles({
            page: 0,
            pageSize: 10,
        });

        // console.log(articles);
    });
    
});
