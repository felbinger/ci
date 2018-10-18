<template>
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

a {
  color: #2943d4;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out;
}

.slide-leave-active {
  animation: slide-out 0.5s ease-in;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
