<template>
  <div class="home">
    <div
      v-for="(tasks,category) in tasks"
      :key="category"
      class="home__category"
    >
      <p
        class="home__categoryText"
      >
        {{ category }}
      </p>
      <div
        v-for="task in tasks"
        :key="task.text"
        class="home__line"
        @click="textToBox(task)"
        @keydown.enter="textToBox(task)"
        tabindex="0"
      >
        <input
          class="home__check"
          type="checkbox"
          aria-label="done or not"
          v-model="task.done"
        />
        <H1
          class="home__header"
          :class="task.done ? 'home__header--crossed' : ''"
        >
          {{ task.text }}
        </H1>
      </div>
    </div>
    <div class="home__add">
      Add task
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    margin: 2em;
    text-align: left;

    &__category {
      position: relative;

    &::before {
      position: absolute;
      content: '';
      display: block;
      height: calc(100% - 2rem);
      width: 0.25rem;
      background-color: rgb(255, 255, 98);
      bottom: 0;
      left: 0rem;
    }
    }

    &__categoryText {
      margin: 0;
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: bold;
    }

    &__line {
      transition: background-color 0.5s;
      background-color: #fff;
      border-radius: 1em;
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      margin-left: 1rem;

      &:hover {
        transition: background-color 0.5s;
        background-color: #eee;
      }
    }

    &__check {
      // transition: all 0.5s;
      appearance: none;
      width: 1.9rem;
      height: 1.9rem;
      margin: 0 1em 0 0.1em;
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
      font-weight: 100;

      &--crossed {
        text-decoration: line-through;
      }
    }

    &__add {
      transition: background-color 0.5s;
      background-color: #ddd;
      padding: .5em;
      border-radius: 1em;
      font-size: 2em;
      text-justify:distribute;

      &:hover {
        transition: background-color 0.5s;
        background-color: #ccc;
      }
    }
  }
</style>

<script>
import JSConfetti from 'js-confetti';
import { mapState, mapActions } from 'vuex';

const jsConfetti = new JSConfetti();

export default {
  computed: {
    ...mapState(['tasks']),
  },
  methods: {
    ...mapActions(['fetchTasks']),
    textToBox(task) {
      // eslint-disable-next-line no-param-reassign
      task.done = !task.done;
      if (task.done) {
        jsConfetti.addConfetti({
          confettiNumber: 300,
        });
      }
      this.$store.commit('updateTask', task);
    },
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>
