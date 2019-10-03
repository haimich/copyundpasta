
<script lang="ts">

  import { Vue } from "vue-property-decorator";
  import { Article } from "@/interfaces/Article";
  import { Recipe } from "@/interfaces/Recipe";
  import { Comment } from "@/interfaces/Comment";
  import ArticleService from "@/services/ArticleService";
  import StatsService from "@/services/StatsService";

  export default class BaseArticlePage extends Vue {

    protected article: Article;

    protected recipe: Recipe;

    protected comments: Comment[] = [];

    private xl = {
      span: 16,
      offset: 4,
    };

    private lg = {
      span: 16,
      offset: 4,
    };

    private md = {
      span: 22,
      offset: 1,
    };

    private sm = {
      span: 22,
      offset: 1,
    };

    private xs = {
      span: 22,
      offset: 1,
    };

    constructor(article: Article, recipe: Recipe = null) {
      super();

      this.recipe = recipe;
      this.article = article;
    }

    get commentCount(): number {
      let count = 0;

      for (let comment of this.comments) {
        count += 1;

        if (comment.children != null) {
          count += comment.children.length;
        }
      }

      return count;
    }

    async refreshComments() {
      let comments = [];

      try {
        const response = await ArticleService.getComments(this.$axios, this.article.slug);
        
        this.comments = response.data;
      } catch (error) {
        console.log(error);
      }
    }

    created() {
      StatsService.count(this.$axios, "article", this.article.slug);
    }

  }

</script>