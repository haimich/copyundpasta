import StringUtil from "@/api/utils/StringUtil";

describe('generateHashWithDate', () => {
  test('should return same string every time', () => {
    expect(StringUtil.generateHashWithDate("1.2.3.4")).toEqual(StringUtil.generateHashWithDate("1.2.3.4"));
  });
});

describe('validateEmail', () => {
  test('should return true', () => {
    expect(StringUtil.validateEmail("michi.m@bla.de")).toBe(true);
  });

  test('should return false', () => {
    expect(StringUtil.validateEmail("1.2.3.4")).toBe(false);
    expect(StringUtil.validateEmail("bla@")).toBe(false);
    expect(StringUtil.validateEmail("bla@as")).toBe(false);
  });
});
