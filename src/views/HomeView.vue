<template>
  <div class="home">
    <div class="home__line">
      <input class="home__check" type="checkbox" aria-label="done or not" v-model="isChecked"/>
      <H1 class="home__header" :class="isChecked ? 'home__header--crossed' : ''">
        {{ a }}
      </H1>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    margin: 2em;
    // background-color: greenyellow;

    &__line {
      display: flex;
      align-items: center;
      // justify-content: center;
    }

    &__check {
      // transition: all 0.5s;
      appearance: none;
      width: 1.9em;
      height: 1.9em;
      margin: 0 2em 0 0.1em;
      border-radius: 50%;
      border: 1.5px solid #333;
      background-color: white;
      cursor: pointer;
      display: inline-block;
      position: relative;

      &::after {
        content: '✔';
        font-size: 1.2em;
        color: white;
        font-weight: bold;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        // transition: opacity 0.3s ease, transform 0.3s ease;
      }

      &:checked {
        background-color: #333;

        &::after {
          opacity: 1;
        }
      }
    }

    &__header {
      margin: 0;
      min-height: 1em;
      text-align: left;
      width: 90%;

      &--crossed {
        text-decoration: line-through;
      }
    }
  }
</style>

<script>
export default {
  data() {
    return {
      isChecked: true,
      a: 'Ullamco excepteur dolor in non mollit irure eu aute consectetur consectetur sunt velit.',
    };
  },
};
</script>
