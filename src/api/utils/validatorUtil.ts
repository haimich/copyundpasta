import { PagingParams } from "@/interfaces/Paging";

const DEFAULT_PAGE_SIZE = 9;

export function validateSlug(body: any): string {
  if (body == null || body.slug == null) {
    throw new Error("Missing mandatory field 'slug'");
  }

  const slug = body.slug;

  if (slug == "" || slug.length <= 0 || slug.length >= 1000) {
    throw new Error("Invalid value for field 'slug'");
  } else {
    return slug;
  }
}

export function validatePagingParams(body: any): PagingParams {
  if (body == null) {
    throw new Error("Missing mandatory field 'page' and 'pageSize'");
  } else if (body.page === null || body.page === undefined) {
    throw new Error("Missing mandatory field 'page'");
  } else if (body.pageSize === null || body.pageSize === undefined) {
    throw new Error("Missing mandatory field 'pageSize'");
  }

  const page = parseInt(body.page, 10);

  if (isNaN(page) || page < 0 || page > 10000000) {
    throw new Error("Invalid value for field 'page'");
  }

  const pageSize = parseInt(body.pageSize, 10);

  if (isNaN(pageSize) || pageSize < 0 || pageSize > 100) {
    throw new Error("Invalid value for field 'pageSize'");
  }

  return {
    page,
    pageSize,
  };
}