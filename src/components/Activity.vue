<template>
  <div class="Activity">
    <span class="Activity__LeaderText">
      I got something for you...<br>
    </span>
    <span class="Activity__LeaderText__Activity">{{ name }}</span>
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

<style scoped lang="scss">
 .Activity {
    text-align:center;

    &__LeaderText {
      font-size: 4em;

      &__Activity {
        line-height: 0.8em;
        font-size: 9em;
        font-family: 'Limelight', cursive;
      }
    }
 }
</style>
