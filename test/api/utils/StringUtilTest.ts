import StringUtil from "@/api/utils/StringUtil";

describe('generateHashWithDate', () => {
  test('should return same string every time', () => {
    expect(StringUtil.generateHashWithDate("1.2.3.4")).toEqual(StringUtil.generateHashWithDate("1.2.3.4"));
  });
});
