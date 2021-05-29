<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/base.scss';
@import url('https://fonts.googleapis.com/css2?family=Limelight&family=Nunito+Sans&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
