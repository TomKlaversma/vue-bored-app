<template>
  <div class="Activity">
    Listen up, this is what your going do...
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Activity',
  computed: {
    isLoading: () => store.state.activityStore.isFetching,
    name: () => store.state.activityStore.activity.activity,
  },
};
</script>
