<template>
    <transition name="slide" mode="out-in">
        <router-view />
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Challenges extends Vue {}
</script>