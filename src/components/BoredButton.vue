<template>
  <div class="BoredButton">
    <vs-button @click="getActivity">
      Find me something to do!
    </vs-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  methods: {
    ...mapActions([
      'getActivity',
    ]),
  },
};
</script>

<style scoped lang="scss">
</style>
