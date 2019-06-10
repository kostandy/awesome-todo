// profile/index.ts
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TodosState } from './types';
import { RootState } from '@/types';

export const state: TodosState = {
  todoList: [],
  error: false,
  latestTodo: null
};

const namespaced: boolean = true;

export const todos: Module<TodosState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
