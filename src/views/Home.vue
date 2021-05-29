<template>
  <div class="HomeView">
    <div class="HomeView__Gif">
      <img
        class="HomeView__Gif__Image"
        src="https://media.giphy.com/media/3osxYjtC4fWCvJRfJm/giphy.gif"
      >
    </div>
    <Layout>
      <Introduction v-if="!hasActivity" />
      <Activity v-else />
      <BoredButton />
    </Layout>
  </div>
</template>

<script>
import store from '@/store';

import Layout from '@/components/Layout';
import BoredButton from '@/components/BoredButton';
import Introduction from '@/components/Introduction';
import Activity from '@/components/Activity';

export default {
  name: 'Home',
  components: {
    Layout,
    BoredButton,
    Introduction,
    Activity,
  },
  computed: {
    hasActivity() {
      return store.state.activityStore.hasActivity;
    },
  },
};
</script>

<style scoped lang="scss">
.HomeView {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @include vignette;

  &__Gif {
    width: 100%;
    height: 100vh;
    position: fixed;
    opacity: 0.8;
    top: 0;
    left: 0;
    z-index: -1;

    &__Image {
      width: 100%;
    }
  }
}
</style>
