<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h1>Todo list</h1>
    <todo-list />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action } from 'vuex-class';
  import TodoList from '@/components/TodoList.vue';

  const namespace: string = 'todos';
  @Component({
    components: { TodoList }
  })
  export default class Home extends Vue {
    @Action('fetchTodoList', { namespace })
    private fetchTodoList: any;

    private mounted() {
      this.fetchTodoList();
    }
  }
</script>
