<template>
    <ul>
        <router-link tag="li" v-for="(category, index) in categories" v-bind:key="index" :to="{ name: 'category', params: { category: category.name }}">{{ category.description }}</router-link>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Categories extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  categories = [];

  created() {
    this.$http
      .get('https://challenges.the-morpheus.de/api/categories', {
        headers: { 'Access-Token': this.token }
      })
      .then(response => response.json())
      .then(json => {
        this.categories = json.data;
      });
  }
}
</script>

<style scoped>
li {
  text-align: left;
  width: 100%;
  display: flex;
  height: 25px;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s;
}

li:hover {
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
</style>