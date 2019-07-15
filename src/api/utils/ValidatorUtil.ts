require("dotenv").config();
import { PagingParams } from "@/interfaces/Paging";
import StringUtil from "./StringUtil";
import { Comment, CommentWithChallenge } from "@/interfaces/Comment";
import axios from "axios";

const DEFAULT_PAGE_SIZE = 9;

let recaptchaSecret;

if (process.env.RECAPTCHA_SECRET_KEY == null || process.env.RECAPTCHA_SECRET_KEY === "") {
  throw new Error("Missing recaptcha secret");
} else {
  recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
}

export default class ValidatorUtil {

  public static async validateCaptcha(recaptchaCallenge: string): Promise<boolean> {
    try {
      let response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaCallenge}`
      );
      
      if (response.data.success === true) {
        return true;
      } else {
        throw new Error("Invalid captcha");
      }
    } catch (err) {
      throw new Error("Invalid captcha");
    }
  }

  public static validateCommentWithChallenge(body: any): CommentWithChallenge {
    return {
      comment: ValidatorUtil.validateComment(body.comment),
      recaptchaChallenge: ValidatorUtil.validateRecaptchaChallenge(body),
    };
  }

  public static validateComment(body: any): Comment {
    return {
      slug: ValidatorUtil.validateSlug(body),
      parentCommentId: ValidatorUtil.validateParentCommentId(body),
      content: ValidatorUtil.validateContent(body),
      author: ValidatorUtil.validateAuthor(body),
      email: ValidatorUtil.validateEmail(body, false),
    };
  }

  public static validateRecaptchaChallenge(body: any): string {
    if (body == null || body.recaptchaChallenge == null) {
      throw new Error("Missing mandatory field 'recaptchaChallenge'");
    }
  
    const recaptchaChallenge = body.recaptchaChallenge;
  
    if (recaptchaChallenge == "" || recaptchaChallenge.length <= 0 || recaptchaChallenge.length >= 10000) {
      throw new Error("Invalid value for field 'recaptchaChallenge'");
    } else {
      return recaptchaChallenge;
    }
  }

  public static validateSlug(body: any): string {
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

  public static validateParentCommentId(body: any): number {
    if (body == null || body.parentCommentId === null || body.parentCommentId === undefined) {
      return null;
    }
  
    const parentCommentId = body.parentCommentId;
  
    if (parentCommentId < 0) {
      throw new Error("Invalid value for field 'parentCommentId'");
    } else {
      return parentCommentId;
    }
  }

  public static validateContent(body: any): string {
    if (body == null || body.content == null) {
      throw new Error("Missing mandatory field 'content'");
    }
  
    const content = body.content;
  
    if (content == "" || content.length <= 0 || content.length >= 1000000) {
      throw new Error("Invalid value for field 'content'");
    } else {
      return content;
    }
  }
  
  public static validateAuthor(body: any): string {
    if (body == null || body.author == null) {
      throw new Error("Missing mandatory field 'author'");
    }
  
    const author = body.author;
  
    if (author == "" || author.length <= 0 || author.length >= 1000000) {
      throw new Error("Invalid value for field 'author'");
    } else {
      return author;
    }
  }

  public static validateEmail(body: any, isMandatory: boolean): string {
    if (body == null || body.email == null) {
      if (isMandatory) {
        throw new Error("Missing mandatory field 'email'");
      } else {
        return "";
      }
    }
  
    const email = body.email;
 
    let isValid = true;

    if (email == "" || email.length <= 0 || email.length >= 1000000) {
      isValid = false;
    } else if (! StringUtil.validateEmail(email)) {
      isValid = false;
    }

    if (! isValid && ! isMandatory) {
      return "";
    } else if (! isValid && isMandatory) {
      throw new Error("Invalid value for field 'email'");
    } else {
      return email;
    }
  }
  
  public static validateRating(body: any): string {
    if (body == null || body.rating === undefined || body.rating === null) {
      throw new Error("Missing mandatory field 'rating'");
    }
  
    const rating = body.rating;
  
    if (rating == "" || rating <= 0 || rating > 5) {
      throw new Error("Invalid value for field 'rating'");
    } else {
      return rating;
    }
  }
  
  public static validatePagingParams(body: any): PagingParams {
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
  
  public static validateSearchterm(body: any): string {
    if (body == null || body.searchterm == null) {
      throw new Error("Missing mandatory field 'searchterm'");
    }
  
    const searchterm = body.searchterm;
  
    if (searchterm == "" || searchterm.length <= 0 || searchterm.length >= 10000) {
      throw new Error("Invalid value for field 'searchterm'");
    } else {
      return searchterm;
    }
  }

}
