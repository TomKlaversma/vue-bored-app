<template>
  <div class="HomeView">
    <Introduction v-if="!hasActivity" />
    <Activity v-else />
    <BoredButton />
  </div>
</template>

<script>
import store from '@/store';

import BoredButton from '@/components/BoredButton';
import Introduction from '@/components/Introduction';
import Activity from '@/components/Activity';

export default {
  name: 'Home',
  components: {
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

}
</style>
