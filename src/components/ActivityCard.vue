<template>
  <div class="ActivityCard">
    <div class="ActivityCard__Image" />
    <div class="ActivityCard__Activity">
      <div class="ActivityCard__Title">
        {{ name }}
      </div>
      <div class="ActivityCard__Description">
        <div class="ActivityCard__Description__Field">
          <RatingBar
            label="Accessibility"
            :rating="accessibility"
          />
        </div>
        <div class="ActivityCard__Description__Field">
          <RatingBar
            label="Price"
            type="price"
            :rating="price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import RatingBar from './RatingBar';

export default {
  name: 'ActivityCard',
  components: {
    RatingBar,
  },
  computed: {
    name: () => store.state.activityStore.activity.activity,
    // gif: () => store.state.activityStore.gif,
    accessibility: () => store.state.activityStore.activity.accessibility,
    price: () => store.state.activityStore.activity.price,
  },
};
</script>

<style scoped lang="scss">
.ActivityCard {
  box-shadow: 0px 20px 64px rgba(255, 197, 90, 0.2);
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  overflow: hidden;
  min-width: 70%;

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

  &__Title {
    @include font-primary;
    text-shadow: 4px 4px 1px rgb(67 24 92 / 72%);
    font-size: 6.4em;
    line-height: 1em;
    margin-left: -1.5em;
  }

  &__Description {
    display: flex;
    flex-direction: row;
    margin-top: 24px;

    &__Field {
      width: 50%;
      position: relative;
    }
  }
}
</style>
