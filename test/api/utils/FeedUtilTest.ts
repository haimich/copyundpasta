import FeedUtil from "@/api/utils/FeedUtil";
import ArticleRepo from "@/api/db/ArticleRepo";

describe('createRssFeed', () => {
  test('should return feed as string', async () => {
    const articles = await ArticleRepo.getAllArticles();

    expect(FeedUtil.createRssFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});

describe('createAtomFeed', () => {
  test('should return feed as string', async () => {
    const articles = await ArticleRepo.getAllArticles();

    expect(FeedUtil.createAtomFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});
