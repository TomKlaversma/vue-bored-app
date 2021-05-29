<template>
  <div class="Activity">
    <div class="Activity__LeaderText">
      I got something for you...
    </div>
    <ActivityCard />
  </div>
</template>

<script>
import ActivityCard from './ActivityCard';

export default {
  components: {
    ActivityCard,
  },
};
</script>

<style lang="scss" scoped>
.Activity {
  position: relative;

  &__LeaderText {
    font-style: italic;
    font-size: 36px;
    margin-bottom: 60px;
  }
}
</style>
