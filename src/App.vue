<template>
  <SideMenu />
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

body {
  background: #181818;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
