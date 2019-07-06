import { createRssFeed, createAtomFeed } from "@/api/utils/feedUtil";
import { getAllArticles } from "@/api/repos/articleRepo";

describe('createRssFeed', () => {
  test('should return feed as string', async () => {
    const articles = await getAllArticles();

    expect(createRssFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});

describe('createAtomFeed', () => {
  test('should return feed as string', async () => {
    const articles = await getAllArticles();

    expect(createAtomFeed(articles).length).toBeGreaterThanOrEqual(1);
  });
});
