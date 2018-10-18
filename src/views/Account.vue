<template>
  <div>
    <h1>ACCOUNT</h1>
    <div>
      <span><label for="name">Name: </label><input id="name" v-model="name" placeholder="Name"></span>
      <span><label for="Email">Email: </label><input id="email" v-model="email" placeholder="E-Mail"></span>
      <span><button>Change Password</button><button>Submit</button></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Account extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  account = {};
  name: string = '';
  email: string = '';

  created() {
    this.$http
      .get('https://challenges.the-morpheus.de/api/auth', {
        headers: {
          'Access-Token': this.token
        }
      })
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.account = json.data;
        this.name = json.data.username;
        this.email = json.data.email;
      });
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
