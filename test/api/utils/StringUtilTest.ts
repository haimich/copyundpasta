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

describe('validateWebsite', () => {
  test('should return true', () => {
    expect(StringUtil.validateWebsite("www.copyundpasta.de")).toBe(true);
    expect(StringUtil.validateWebsite("https://www.copyundpasta.de/")).toBe(true);
    expect(StringUtil.validateWebsite("copyundpasta.de")).toBe(true);
  });

  test('should return false', () => {
    expect(StringUtil.validateWebsite("www.")).toBe(false);
    expect(StringUtil.validateWebsite("copyundpasta")).toBe(false);
    expect(StringUtil.validateWebsite(".de")).toBe(false);
  });
});
