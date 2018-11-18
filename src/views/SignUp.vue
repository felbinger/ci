<template>
    <div>
      <ul v-if="errors.length">
        <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
      </ul>
      <form @submit="signup" @input="validate">
        <h1>Sign Up</h1>
        <table>
          <tr>
            <td>Name</td>
            <td><input type="text" v-model="username"></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" v-model="email"></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" v-model="password"></td>
          </tr>
          <tr>
            <td>Validate Password</td>
            <td><input type="password" v-model="validate_password"></td>
          </tr>
          <tr>
            <td colspan="2"><button :disabled="disabled" type="submit">Submit</button></td>
          </tr>
        </table>
        <router-link tag="p" class="link" :to="{path: '/signin'}">Sign In</router-link>
      </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
  disabled = true;
  username = '';
  email = '';
  password = '';
  validate_password = '';
  errors: Array<string> = [];

  validate() {
    this.errors = [];

    if (
      !this.username ||
      !this.email ||
      !this.password ||
      !this.validate_password
    ) {
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

    if (this.validate_password !== this.password) {
      this.errors.push('Please validate the password.');
    }

    this.disabled = this.errors.length !== 0;
  }

  signup(e: Event) {
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
