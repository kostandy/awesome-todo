import { GetterTree } from 'vuex';
import { TodosState, Todo } from './types';
import { RootState } from '@/types';

export const getters: GetterTree<TodosState, RootState> = {
  todoList: ({ todoList }): Todo[] => {
    return (todoList && todoList.length && todoList) || [];
  }
};
