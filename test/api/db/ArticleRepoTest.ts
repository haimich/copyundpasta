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

describe('getArticleComments', () => {
    test('should return all comments', async () => {
        let comments = await ArticleRepo.getArticleComments("baileys-chocolate-cupcakes");

        // console.log(comments);
    });
});

describe('createComment', () => {
    test('should persist comment', async () => {
        await ArticleRepo.createComment({
            articleSlug: "baileys-chocolate-cupcakes",
            content: "a fancy comment",
            author: "me & myself",
            email: "me.myself@web.de", 
        });
    });

    test('should persist child comment', async () => {
        await ArticleRepo.createComment({
            parentCommentId: 1,
            articleSlug: "baileys-chocolate-cupcakes",
            content: "a fancy comment 2",
            author: "me & myself",
            email: "me.myself@web.de", 
        });
    });
});
