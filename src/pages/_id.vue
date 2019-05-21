<template>
  <div v-if="post != null">
    <h1>{{ post.title }}</h1>

    <p>{{ post.content }}</p>

    
    Counter: {{ counter }}

    <el-button @click="increment()">Increment</el-button>

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
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  },
  async asyncData({ params, $axios }) {
    let response = await $axios.get(`/recipes/getRecipe?slug=${params.id}`);

    return { recipe: response.data }
  },
  head: {
    title: 'Fancy recipe'
  }
}
</script>
