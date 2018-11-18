<template>
  <div>
    <ul v-if="errors.length">
      <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
    </ul>
    <form @submit="signin" @input="validate">
      <h1>Sign In</h1>
      <table>
        <tr>
          <td>Name</td>
          <td><input type="text" v-model="username"></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="password" v-model="password"></td>
        </tr>
        <tr>
          <td><button :disabled="disabled" type="submit">Submit</button></td>
          <td style="text-align: right;">
            <input type="checkbox" v-model="keepLoggedIn">
            <label>Keep logged in</label>
          </td>
        </tr>
      </table>
      <router-link tag="p" class="link" :to="{path: '/signup'}">Sign Up</router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignIn extends Vue {
  disabled = true;
  username = '';
  password = '';
  keepLoggedIn = false;
  errors: Array<string> = [];

  created() {
    this.validate();
  }

  validate() {
    this.errors = [];

    if (!this.username || !this.password) {
      this.errors.push('Please enter all fields.');
    }

    if (this.username.length >= 200 || this.password.length >= 200) {
      this.errors.push(
        'The username or password must be under 200 characters long'
      );
    }

    this.disabled = this.errors.length !== 0;
  }

  signin(e: Event) {
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
          this.keepLoggedIn
            ? localStorage.setItem('Token', json.token)
            : sessionStorage.setItem('Token', json.token);

          this.$router.push({ path: '/' });
        } else {
          this.errors = this.errors.concat(json.errors);
        }
      });
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  background-image: url('../assets/login_background.png');
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  border-radius: 10px;
  background-color: #ffffff;
  padding: 25px 45px;
  text-align: left;
}

p {
  text-align: center;
}

table {
  padding-bottom: 10px;
  border-bottom: 2px #cccccc solid;
  font-size: 11pt;
}

ul {
  color: #ffffff;
  list-style: none;
}
</style>
