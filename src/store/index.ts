import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { todos } from './todos';
import { RootState } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    todos
  }
};

export default new Vuex.Store<RootState>(store);
