<template>
  <div class="home">
    <div class="home__line">
      <input class="home__check" type="checkbox" aria-label="done or not"/>
      <H1 class="home__header">
        {{ a }}
      </H1>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    margin: 5%;
    background-color: greenyellow;

    &__line {
      display: flex;
      align-items: center;
      // justify-content: center;
    }

    &__check {
      appearance: none;
      width: 1.9em;
      height: 1.9em;
      margin-right: 1em;
      border-radius: 50%;
      border: 1.5px solid #333;
      background-color: white;
      cursor: pointer;
      display: inline-block;
    }

    &__header {
      margin: 0;
      background-color: rgb(255, 98, 179);
      min-height: 1em;
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
