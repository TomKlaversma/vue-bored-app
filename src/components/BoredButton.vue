<template>
  <div class="BoredButton">
    <vs-button
      gradient
      size="xl"
      :loading="isLoading"
      @click="getActivity"
    >
      {{ text }}
    </vs-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from '@/store';

export default {
  name: 'BoredButton',
  computed: {
    isLoading() {
      return store.state.activityStore.isFetching;
    },
    text: () => (store.state.activityStore.hasActivity
      ? 'Nah, I would like something else' : 'Find me something to do!'),
  },
  methods: {
    ...mapActions([
      'getActivity',
    ]),
  },
};
</script>

<style scoped lang="scss">
.BoredButton {
  margin: 42px auto;
  display: inline-block;
}
</style>
