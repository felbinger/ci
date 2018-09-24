<template>
    <div id="wrapper">
        / <span v-for="(route, index) in $route.matched" v-bind:key="index" v-if="route.name !== undefined">&nbsp;<router-link class="router-link" :to="{ path: route.path }">{{ route.name }}</router-link> / </span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Pathname extends Vue {}
</script>

<style>
#path #wrapper {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#path .router-link {
  color: #0645ad !important;
}

#path .router-link-exact-active {
  font-weight: bold;
}
</style>
