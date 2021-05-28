<template>
  <div class="HomeView">
    <h1>Are you bored?</h1>
    <h2>Let's find you an activity</h2>
    <BoredButton />
  </div>
</template>

<script>
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
