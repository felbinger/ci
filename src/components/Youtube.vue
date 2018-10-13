<template>
    <iframe v-if="videoId" :src="'https://www.youtube.com/embed/' + videoId" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Youtube extends Vue {
  @Prop()
  videoId!: string;
}
</script>