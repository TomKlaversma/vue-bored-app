<template>
  <div class="HomeView">
    <Layout>
      <Introduction v-if="!hasActivity" />
      <ActivityCard v-else />
      <BoredButton />
    </Layout>
  </div>
</template>

<script>
import store from '@/store';

import Layout from '@/components/Layout';
import BoredButton from '@/components/BoredButton';
import Introduction from '@/components/Introduction';
import ActivityCard from '@/components/ActivityCard';

export default {
  name: 'Home',
  components: {
    Layout,
    BoredButton,
    Introduction,
    ActivityCard,
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
