<template>
    <div>
        <h1>ACCOUNT</h1>
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Account extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  challenges = [];

  created() {
    this.$http
      .get('https://challenges.the-morpheus.de/api/challenges', {
        headers: {
          'Access-Token': this.token
        }
      })
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.challenges = json.data;
      });
  }
}
</script>
