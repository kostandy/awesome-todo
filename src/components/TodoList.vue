<template>
  <section class="todo__list">
    <h1></h1>
    <p v-for="todo in todoList">[{{todo.id}}] {{todo.title}}</p>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';

  const namespace: string = 'todos';

  @Component({
    computed: {
      ...mapGetters(namespace, ['todoList'])
    }
  })
  export default class TodoList extends Vue {
  }
</script>

<style lang="stylus" scoped>
.todo__list
  margin 0 auto
  width 50%
  text-align left
</style>
