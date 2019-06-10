import { ActionTree } from 'vuex';
import axios from 'axios';
import { TodosState } from './types';
import { RootState } from '@/types';
import { FETCH_TODO_LIST_ERROR, FETCH_TODO_LIST_SUCCESSFUL } from './consts';


export const actions: ActionTree<TodosState, RootState> = {
  fetchTodoList: async ({ commit }): Promise<any> => {
    try {
      const url: string = 'https://jsonplaceholder.typicode.com/todos';
      const { data } = await axios.get(url);
      await commit(FETCH_TODO_LIST_SUCCESSFUL, data);
    } catch (error) {
      await commit(FETCH_TODO_LIST_ERROR);
    }
  }
};
