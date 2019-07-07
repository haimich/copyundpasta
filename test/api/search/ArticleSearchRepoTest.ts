import ArticleSearchRepo from "@/api/search/ArticleSearchRepo";

describe('search', () => {
    test('should return hits', async () => {
        try {
            let res = await ArticleSearchRepo.search('oma')

            expect(res.statusCode).toBe(200);
            
            // console.log(res);
            // console.log(res.body.hits.hits);
        } catch (error) {
            console.log(error);
        }
    });
});
