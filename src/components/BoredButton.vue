<template>
  <div class="BoredButton">
    <vs-button
      :loading="isLoading"
      @click="getActivity"
    >
      Find me something to do!
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
  },
  methods: {
    ...mapActions([
      'getActivity',
    ]),
  },
};
</script>

<style scoped lang="scss">
</style>
