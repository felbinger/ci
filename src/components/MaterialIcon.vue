<template>
  <i class="material-icons">{{ name }}</i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

@Component
export default class MaterialIcon extends Vue {
  @Prop()
  name!: string;
}
</script>