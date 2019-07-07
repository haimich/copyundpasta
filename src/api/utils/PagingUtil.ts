
export default class PagingUtil {

  public static calculateOffset(page: number, pageSize: number): number {
    return page * pageSize;
  }
  
}