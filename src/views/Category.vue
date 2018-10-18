<template>
  <div>
    <h1>{{ category.description | uppercase }}</h1>
    <li v-if="!errors.length" v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
    <transition name="slide" mode="out-in">
      <ul v-bind:key="$route.params.category">
        <router-link v-for="(challenge, index) in challenges" v-bind:key="index" tag="li" :to="{ name: 'challenge', params: { id: challenge.id }}">{{ challenge.name }}</router-link>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Category extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  category = { name: '', description: '' };
  challenges = [];
  errors = [];

  fetch(name: string) {
    this.$http
      .get(`https://challenges.the-morpheus.de/api/categories/${name}`, {
        headers: { 'Access-Token': this.token }
      })
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.errors = json.errors;
        this.category = json.data;
      });

    this.$http
      .get(`https://challenges.the-morpheus.de/api/challenges`, {
        headers: { 'Access-Token': this.token }
      })
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.errors = json.errors;
        this.challenges = json.data.filter(
          (el: any) => el.category.name == this.category.name
        );
      });
  }

  created() {
    this.fetch(this.$route.params.category);
  }

  @Watch('$route')
  routeChanged(from: any, to: any) {
    this.fetch(from.params.category);
  }
}
</script>
