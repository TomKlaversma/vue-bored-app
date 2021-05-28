<template>
  <div class="HomeView">
    <Introduction />
    <BoredButton />
  </div>
</template>

<script>
import BoredButton from '../components/BoredButton';
import Introduction from '../components/Introduction';

export default {
  name: 'Home',
  components: {
    BoredButton,
    Introduction,
  },
};
</script>

<style scoped lang="scss">
.HomeView {

}
</style>
