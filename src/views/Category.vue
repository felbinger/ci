<template>
    <div>
        <h1>{{category.description | uppercase}}</h1>
        <li v-if="!errors.length" v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
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

  _fetch(name: string) {
    this.$http
      .get(`https://challenges.the-morpheus.de/api/categories/${name}`, {
        headers: { 'Access-Token': this.token }
      })
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.errors = json.errors;
        this.category = json.data;
      });
  }

  created() {
    this._fetch(this.$route.params.category);
  }

  @Watch('$route')
  _routeChanged(from: any, to: any) {
    this._fetch(from.params.category);
  }
}
</script>
