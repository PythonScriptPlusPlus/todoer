<template>
  <div class="home">
    <H1 class="home__header">{{ a }}</H1>
  </div>
</template>

<style lang="scss">
  .home {
    margin: 5%;
    height: calc(90vh - 3em);
    background-color: greenyellow;
    &__header {
      margin: 0;
      background-color: rgb(255, 98, 179);
    }
  }
</style>

<script>
export default {
  data() {
    return {
      a: 'Hell',
    };
  },
};
</script>
