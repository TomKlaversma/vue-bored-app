<template>
  <div class="Activity">
    <div class="Activity__LeaderText">
      I got something for you...
    </div>
    <div class="Activity__Card">
      <div class="Activity__Card__Image" />
      <div class="Activity__Card__Activity">
        <div class="Activity__Title">
          {{ name }}
        </div>
        <div class="Activity__Description">
          <div class="Activity__Description__Field">
            Accessibility
            <div class="Activity__Rating" />
            <div
              class="Activity__Rating--active"
              :style="{'width': accessibility}"
            />
          </div>
          <div class="Activity__Description__Field">
            Price
            <div class="Activity__Rating" />
            <div
              class="Activity__Rating--active"
              :style="{'width': price}"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'ActivityCard',
  computed: {
    name: () => store.state.activityStore.activity.activity,
    // gif: () => store.state.activityStore.gif,
    accessibility: () => `${store.state.activityStore.activity.accessibility * 100}%`,
    price: () => `${store.state.activityStore.activity.price * 100}%`,
  },
};
</script>

<style scoped lang="scss">
.Activity {
  position: relative;

  &__LeaderText {
    font-style: italic;
    font-size: 36px;
    margin-bottom: 60px;
  }

  &__Card {
    box-shadow: 0px 20px 64px rgba(255, 197, 90, 0.2);
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    overflow: hidden;

    &__Image {
      background-color: #000;
      width: 50%;
    }

    &__Activity {
      @include styled-orange-gradient;

      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;

      border-top: 2px solid rgb(255, 197, 90);
      border-right: 2px solid rgb(255, 197, 90);
      border-bottom: 2px solid rgb(255, 197, 90);

      width: 50%;
      padding: 75px;

      text-align: left;
    }
  }

  &__Title {
    font-size: 6.4em;
    line-height: 1em;
    @include font-primary;
    margin-left: -1.5em;
  }

  &__Description {
    margin-top: 24px;

    &__Field {
      position: relative;
    }
  }

  &__Rating,
  &__Rating--active {
    font-size: 24px;
    max-width: calc(35px * 5);
    background-image: url('../assets/star.svg');
    background-repeat: repeat-x;
    height: 35px;
    opacity: 0.2;
    margin-left: -7px;
  }

  &__Rating--active {
    width: auto;
    margin-top: -35px;
    opacity: 1;
  }
}
</style>
