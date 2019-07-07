import FeedUtil from "@/api/utils/FeedUtil";
import { getAllArticles } from "@/api/db/articleRepo";

describe('createRssFeed', () => {
  test('should return feed as string', async () => {
    const articles = await getAllArticles();

    expect(FeedUtil.createRssFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});

describe('createAtomFeed', () => {
  test('should return feed as string', async () => {
    const articles = await getAllArticles();

    expect(FeedUtil.createAtomFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});
