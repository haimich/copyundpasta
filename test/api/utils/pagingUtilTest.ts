import PagingUtil from "@/api/utils/PagingUtil";

describe('calculateOffset', () => {
  test('should return 0', () => {
    expect(PagingUtil.calculateOffset(0, 0)).toEqual(0);

    expect(PagingUtil.calculateOffset(0, 10)).toEqual(0);
  });

  test('should return page 2', () => {
    expect(PagingUtil.calculateOffset(1, 10)).toEqual(10);

    expect(PagingUtil.calculateOffset(1, 1)).toEqual(1);

    expect(PagingUtil.calculateOffset(1, 4)).toEqual(4);
  });
});
