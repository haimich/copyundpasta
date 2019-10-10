import ArticleRepo from "@/api/db/ArticleRepo";

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
        let comments = await ArticleRepo.getArticleComments("zimtschnecken-aka-cinnamon-rolls");

        // console.log(comments);
    });
});

describe('createComment', () => {
    test('should persist comment', async () => {
        await ArticleRepo.createComment({
            slug: "zimtschnecken-aka-cinnamon-rolls",
            content: "a fancy comment",
            author: "me & myself",
            website: "www.me.de",
        });
    });

    test('should persist child comment', async () => {
        await ArticleRepo.createComment({
            parentCommentId: 1,
            slug: "zimtschnecken-aka-cinnamon-rolls",
            content: "a fancy comment 2",
            author: "me & myself",
            website: "www.me.de", 
        });
    });
});
