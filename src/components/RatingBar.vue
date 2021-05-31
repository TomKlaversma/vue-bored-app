<template>
  <div class="Rating">
    {{ label }}
    <div class="Rating__Container">
      <div
        class="Rating__Stars"
        :class="type"
      />
      <div
        class="Rating__Stars--active"
        :class="type"
        :style="{'width': width}"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: 'Stars',
    },
  },
  computed: {
    width() { return `${this.rating * 100}%`; },
  },
};
</script>

<style scooed lang="scss">
.Rating {
  &__Container {
    position: relative;
    height: 35px;
    margin: 5px 0 0 -7px;
    width: calc(35px * 5);
  }

  &__Stars,
  &__Stars--active {
    height: 35px;
    width: 100%;
    position: absolute;
    top: 0;

    background-image: url('../assets/star.svg');
    background-repeat: repeat-x;
    opacity: 0.2;

    &.price {
      background-image: url('../assets/price.svg');
    }
  }

  &__Stars--active {
    background-size: 35px;
    min-height: 35px;
    top: -3px;
    left: -3px;
    opacity: 1;
  }
}
</style>
