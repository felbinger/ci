<template>
    <ul id="sidebar">
      <router-link tag="li" :to="{ path: '/' }">Home</router-link>
      <router-link tag="li" :to="{ path: '/me' }">Account</router-link>
      <router-link tag="li" :to="{ path: '/challenges' }">Challenges</router-link>
      <Categories v-if="$route.path.split('/').includes('challenges')" />
      <router-link tag="li" :to="{ path: '/feedback' }">Feedback</router-link>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Categories from '@/components/Categories.vue';

@Component({
  components: {
    Categories
  }
})
export default class Sidebar extends Vue {}
</script>

<style scoped>
#sidebar {
  width: 100%;
  height: 100%;
  border-right: 1px solid black;
  padding-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

ul {
  font-size: 1.25vw;
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
</style>

