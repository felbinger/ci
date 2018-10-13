<template>
    <div>
        <h1>CHALLENGES</h1>
        <ul>
            <router-link v-for="(challenge, index) in challenges" v-bind:key="index" tag="li" :to="{ name: 'challenge', params: { id: challenge.id }}">{{ challenge.name }}</router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AllChallenges extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  challenges = [];

  created() {
    this.$http
      .get('https://challenges.the-morpheus.de/api/challenges', {
        headers: {
          'Access-Token': this.token
        }
      })
      .then(response => response.json())
      .then(json => {
        this.challenges = json.data;
      });
  }
}
</script>

<style scoped>
label {
  float: left;
}
</style>
