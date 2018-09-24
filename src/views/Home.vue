<template>
  <div id="home">
    <div id="sidebar"><Sidebar/></div>
    <div id="content">
      <div id="path"><Pathname/></div>
      <div id="router"><router-view /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar.vue';
import Pathname from '@/components/Pathname.vue';

@Component({
  components: {
    Sidebar,
    Pathname
  }
})
export default class Home extends Vue {}
</script>


<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#sidebar {
  width: 20%;
  height: 100%;
  float: left;
}

#content {
  width: 80%;
  height: 100%;
  float: right;
}

#path {
  width: 100%;
  height: 5%;
}

#router {
  width: 100%;
  height: 95%;
}
</style>
