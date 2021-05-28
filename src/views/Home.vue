<template>
  <div class="HomeView">
    <BoredButton />
  </div>
</template>

<script>
// @ is an alias to /src
import BoredButton from '../components/BoredButton';

export default {
  name: 'Home',
  components: {
    BoredButton,
  },
};
</script>

<style scoped lang="scss">
.HomeView {

}
</style>
