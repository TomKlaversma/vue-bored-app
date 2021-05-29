<template>
  <div class="HomeView">
    <Layout>
      <Introduction v-if="!hasActivity" />
      <ActivityLoading v-else-if="isFetching" />
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
import ActivityLoading from '@/components/ActivityLoading';
import Activity from '@/components/Activity';

export default {
  name: 'Home',
  components: {
    Layout,
    BoredButton,
    Introduction,
    ActivityLoading,
    Activity,
  },
  computed: {
    hasActivity() {
      return store.state.activityStore.hasActivity;
    },
    isFetching() {
      return store.state.activityStore.isFetching;
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
