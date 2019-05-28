<template>
  <div v-if="post != null">
    <h1>{{ post.title }}</h1>

    <p>{{ post.content }}</p>

    Counter: {{ counter }}

    <el-button
      @click="increment()"
    >Increment
    </el-button>

    <h2>Rezept:</h2>

    {{ recipe }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      recipe: null,
      posts: [
        {
          id: 'muttertags-toertchen-mit-baiser-rosen-und-erdbeersahne',
          title: 'Muddatag',
          content: 'deine muddatagstorte'
        }
      ]
    }
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id)
    },
    counter() {
      return this.$store.state.counter
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios.post(`/api/recipes/getRecipe`, {
      id: 1,
    });

    return { recipe: response.data };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  },
  head: {
    title: 'Fancy recipe'
  }
}
</script>
