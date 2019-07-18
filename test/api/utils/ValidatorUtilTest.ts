import ValidatorUtil from "@/api/utils/ValidatorUtil";

describe('validateSlug', () => {
  test('should allow string', () => {
    ValidatorUtil.validateSlug({
      slug: "asdasadasd-asdas-asd",
    });
  });

  test('should throw error on empty string', () => {
    expect(() => {
      ValidatorUtil.validateSlug({
        slug: "",
      });
    }).toThrow();
  });

  test('should throw error on too long string', () => {
    expect(() => {
      ValidatorUtil.validateSlug({
        slug: "should throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long string should throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshouldshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould",
      });
    }).toThrow();
  });
});

describe('validatePagingParams', () => {
  test('should validate', () => {
    ValidatorUtil.validatePagingParams({
      page: 5,
      pageSize: 10,
    });
  });

  test('should throw error on negative integer', () => {
    expect(() => {
      ValidatorUtil.validatePagingParams({
        page: 5,
        pageSize: -1,
      });
    }).toThrow();
  });

  test('should throw error if param is missing', () => {
    expect(() => {
      ValidatorUtil.validatePagingParams({
        page: 0,
        pageSizzle: 21
      });
    }).toThrow();

    expect(() => {
      ValidatorUtil.validatePagingParams({
        pageant: 0,
        pageSize: 21
      });
    }).toThrow();
  });
});

describe('validateRating', () => {
  test('should allow integer', () => {
    ValidatorUtil.validateRating({
      rating: 4,
    });
  });

  test('should throw error when param is missing', () => {
    expect(() => {
      ValidatorUtil.validateRating({
        rating2: "",
      });
    }).toThrow();
  });

  test('should throw error on empty value', () => {
    expect(() => {
      ValidatorUtil.validateRating({
        rating: "",
      });
    }).toThrow();
  });

  test('should throw error if value is too small', () => {
    expect(() => {
      ValidatorUtil.validateRating({
        rating: 0,
      });
    }).toThrow();
  });

  test('should throw error if value is too big', () => {
    expect(() => {
      ValidatorUtil.validateRating({
        rating: 5.5,
      });
    }).toThrow();
  });
});

describe('validateEmail', () => {
  test('should allow email', () => {
    ValidatorUtil.validateEmail({
      email: "foo@bla.de",
    });
  });

  test('should throw error when email is mandatory', () => {
    expect(() => {
      ValidatorUtil.validateEmail({
        email: "",
      }, true);
    }).toThrow();
  });

  test('should not throw error when email is not mandatory', () => {
    expect(ValidatorUtil.validateEmail({
        email: "",
      }, false)).toEqual("");
  });
});

describe('validateCaptcha', () => {
  test.skip('should validate', async () => {
    let result = await ValidatorUtil.validateCaptcha("03AOLTBLToGDJSSD7seVnJImBXfN3Y_V8FP4vFijUyrYr42yGuf0npZSAhnVxbk5aIAxo0OfXpFg9mWwwB89Io2Sso2sIiUMpQOjDNLm8dRUoy_cQbeuF7JVy16Uw4ND_PKy1XERSeKOPfwHO6zHrcPXcYpddf3VSwE8tammKTRpbNpIIft5IlxDczI9djUL0xslM6rzv3VO2FrOumxVJgVtX1QagVJm21M9ehIZ8PpOljHAs4gVTQnFXx9M62cHx7yuKMX23w0l3Y8ZKHLNY7QTXw7cMMM9TH1UNAGg0sf9r5nGmhcXsHwATiaNc9gaMw3DwIYjDlEQxJ");

    expect(result).toEqual(true);
  });

  test('should throw an error for invalid captcha', async () => {
    try {
      await ValidatorUtil.validateCaptcha("foo");
      expect(true).toEqual(false);
    } catch (error) {
      expect(true).toEqual(true);
    }
  });
});