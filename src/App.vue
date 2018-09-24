<template>
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
    console.log(this.$route);
  }
}
</script>


<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
