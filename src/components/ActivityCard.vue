<template>
  <div class="ActivityCard">
    <div class="ActivityCard__Image" />
    <div class="ActivityCard__Type">
      {{ type }}
    </div>
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
        <div class="ActivityCard__Description__Field">
          Participants
          <br><span class="ActivityCard__Participants">{{ participants }}</span>
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
    type: () => store.state.activityStore.activity.type,
    participants: () => store.state.activityStore.activity.participants,
  },
};
</script>

<style scoped lang="scss">
.ActivityCard {
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  min-width: 70%;
  overflow: hidden;
  box-shadow: 0px 20px 64px rgba(255, 197, 90, 0.2);

  &__Image {
    background-color: #000;
    width: 50%;
  }

  &__Type {
    position: absolute;
    top: 0;
    left: 40px;
    padding: 18px;
    text-align: center;
    border-bottom-left-radius: 10px;
    @include styled-orange-gradient;
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
      width: 40%;
      position: relative;
    }
  }

  &__Participants {
    font-size: 32px;
    width: 20%;
    position: relative;
    color: rgb(42, 25, 68);
  }
}
</style>
