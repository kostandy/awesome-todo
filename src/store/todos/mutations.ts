import { MutationTree } from 'vuex';
import { Todo, TodosState } from './types';
import {
  FETCH_TODO_LIST_ERROR,
  FETCH_TODO_LIST_SUCCESSFUL
} from '@/store/todos/consts';

export const mutations: MutationTree<TodosState> = {
  [FETCH_TODO_LIST_SUCCESSFUL]: (state, payload: Todo[]) => {
    state.todoList = payload;
    state.error = false;
  },
  [FETCH_TODO_LIST_ERROR]: (state) => {
    state.todoList = [];
    state.error = true;
  }
};
