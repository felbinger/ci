<template>
    <div id="path">
        /&nbsp;<router-link :to="{ path: '/' }" class="router-link">home</router-link>&nbsp;/&nbsp;<span v-for="(route, index) in $route.matched" v-bind:key="index" v-if="route.name !== undefined"><router-link class="router-link" :to="{ path: route.path }">{{ route.name }}</router-link>&nbsp;/&nbsp;</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Pathname extends Vue {}
</script>

<style scoped>
#path {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#path .router-link-exact-active {
  font-weight: bold;
}
</style>
