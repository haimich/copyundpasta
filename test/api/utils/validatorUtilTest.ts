import { validateSlug, validatePagingParams, validateRating } from "@/api/utils/validatorUtil";

describe('validateSlug', () => {
  test('should allow string', () => {
    validateSlug({
      slug: "asdasadasd-asdas-asd",
    });
  });

  test('should throw error on empty string', () => {
    expect(() => {
      validateSlug({
        slug: "",
      });
    }).toThrow();
  });

  test('should throw error on too long string', () => {
    expect(() => {
      validateSlug({
        slug: "should throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long string should throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshouldshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould throw error on too long stringshould",
      });
    }).toThrow();
  });
});

describe('validatePagingParams', () => {
  test('should validate', () => {
    validatePagingParams({
      page: 5,
      pageSize: 10,
    });
  });

  test('should throw error on negative integer', () => {
    expect(() => {
      validatePagingParams({
        page: 5,
        pageSize: -1,
      });
    }).toThrow();
  });

  test('should throw error if param is missing', () => {
    expect(() => {
      validatePagingParams({
        page: 0,
        pageSizzle: 21
      });
    }).toThrow();

    expect(() => {
      validatePagingParams({
        pageant: 0,
        pageSize: 21
      });
    }).toThrow();
  });
});

describe('validateRating', () => {
  test('should allow integer', () => {
    validateRating({
      rating: 4,
    });
  });

  test('should throw error when param is missing', () => {
    expect(() => {
      validateRating({
        rating2: "",
      });
    }).toThrow();
  });

  test('should throw error on empty value', () => {
    expect(() => {
      validateRating({
        rating: "",
      });
    }).toThrow();
  });

  test('should throw error if value is too small', () => {
    expect(() => {
      validateRating({
        rating: 0,
      });
    }).toThrow();
  });

  test('should throw error if value is too big', () => {
    expect(() => {
      validateRating({
        rating: 5.5,
      });
    }).toThrow();
  });
});