<template>
    <div>
        <form @submit="login" @input="validate">
            <ul v-if="errors.length">
                <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
            </ul>
            <p><label for="name">Name</label><input id="name" v-model="username"></p>
            <p><label for="email">Email</label><input id="email" v-model="email"></p>
            <p><label for="password">Password</label><input type="password" id="password" v-model="password"></p>
            <button :disabled="errors.length !== 0" type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  username = '';
  email = '';
  password = '';
  errors: Array<string> = [];

  validate() {
    this.errors = [];

    if (!this.username || !this.password) {
      this.errors.push('Please enter all fields.');
    }

    if (this.password.length < 8) {
      this.errors.push('The password must be at least 8 characters long.');
    }

    if (this.username.length >= 200 || this.password.length >= 200) {
      this.errors.push(
        'The username or password must be under 200 characters long'
      );
    }
  }

  login(e: Event) {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password
    };

    this.$http
      .post('https://challenges.the-morpheus.de/api/auth', data)
      .then(response => response.json(), response => response.json())
      .then(json => {
        if (json.token) {
          this.$router.push({ path: '/' });
        } else {
          this.errors = this.errors.concat(json.errors);
        }
      });
  }
}
</script>

<style>
</style>
