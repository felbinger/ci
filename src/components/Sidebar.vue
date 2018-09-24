<template>
    <div id="wrapper">
    <router-link :to="{ path: '/home' }">Home</router-link>
    <router-link :to="{ path: '/home/me' }">Account</router-link>
    <router-link :to="{ path: '/home/challenges' }">Challenges</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<style>
#sidebar #wrapper {
  width: 100%;
  height: 100%;
  border-right: 1px solid black;
  padding-top: 10px;
  display: flex;
  flex-flow: column nowrap;
}
</style>

