<template>
  <div class="HomeView">
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
  @include styled-gradient-overlay;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: $white;
}
</style>
