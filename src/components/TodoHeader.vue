<template>
  <div class="header">
    <H1 class="header__title">
      Todo-er
    </H1>
    <button
      class="header__save"
      @click="saveClicked"
    >
      Save
    </button>
  </div>
</template>

<style lang="scss">
  .header {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: rgb(255, 255, 98);
    padding: 0 1em;

    &__title {
      padding: .5em;
      margin: 0;
    }

    &__save {
      z-index: 2;
      transition: all .25s;
      font-size: 1.5em;
      background-color: #333;
      color: #fff;
      border: solid #333;
      padding: 0.25em 1em;
      border-radius: 1.5em;
      cursor: pointer;
      position: relative;

      &:hover {
        transition: all .25s;
        background-color: #444;
      }

      &:active {
        transition: all .25s;
        background-color: #555;
        margin-top: .125em;
      }
    }
  }
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks']),
  },
  methods: {
    saveClicked() {
      fetch('http://127.0.0.1:5000/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.tasks),
      })
        .then((response) => response.json())
        .then((data) => console.log('Save success:', data))
        .catch((error) => console.error('Save error:', error));
    },
  },
};
</script>
