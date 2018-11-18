<template>
  <div id="sidebar">
    <ul>
      <router-link tag="li" :to="{ path: '/' }">Home</router-link>
      <router-link tag="li" :to="{ path: '/me' }">Account</router-link>
      <router-link tag="li" :to="{ path: '/challenges' }">Challenges</router-link>
      <Categories v-if="$route.path.split('/').includes('challenges') || $route.path.split('/').includes('category')" />
      <router-link tag="li" :to="{ path: '/feedback' }">Feedback</router-link>
    </ul>
    <span id="logout" @click="logout"><material-icon name="exit_to_app" /><a>Logout</a></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Categories from '@/components/Categories.vue';
import MaterialIcon from '@/components/MaterialIcon.vue';

@Component({
  components: {
    Categories,
    MaterialIcon
  }
})
export default class Sidebar extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');

  created() {
    this.$http.get('https://challenges.the-morpheus.de/api/auth', {
      headers: { 'Access-Token': this.token }
    });
  }

  logout() {
    this.$http.delete('https://challenges.the-morpheus.de/api/auth', {
      headers: { 'Access-Token': this.token }
    });

    localStorage.clear();
    sessionStorage.clear();

    this.$router.push({ path: '/signin' });
  }
}
</script>

<style scoped>
#sidebar {
  font-size: 1.25vw;
  width: 100%;
  height: 100%;
  border-right: 1px solid black;
  padding-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

ul {
  margin: 0;
  padding-left: 10px;
  box-sizing: border-box;
  list-style: none;
}

li {
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
}

li:hover {
  text-shadow: 0.1px 0.1px 0.1px rgba(0, 0, 0, 0.5);
}

#logout {
  padding-bottom: 30px;
  margin-left: -24px;
  align-self: center;
  display: flex;
  align-items: center;
  color: #2943d4;
  cursor: pointer;
}

#logout a {
  text-decoration: underline;
}
</style>

