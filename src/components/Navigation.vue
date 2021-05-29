<template>
  <div id="nav">
    <vs-navbar
      v-model="active"
      color="#7d33ff"
      square
      center-collapsed
    >
      <template #left />
      <template #right>
        <vs-navbar-item
          id="/"
          to="/"
          :active="active === '/'"
        >
          Home
        </vs-navbar-item>
        <vs-navbar-item
          id="/about"
          to="/about"
          :active="active === '/about'"
        >
          About
        </vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '/',
    };
  },
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0;
}
</style>
