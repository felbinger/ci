<template>
    <div>
        <ul>
            <li :id="index" v-for="(challenge, index) in challenges" v-bind:key="index"><label :for="index">{{ challenge.id }}</label>{{ challenge.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CodingChallenges extends Vue {
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
