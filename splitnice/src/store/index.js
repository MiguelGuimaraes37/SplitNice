import { createStore } from 'vuex';

import authModule from '@/store/modules/auth/index';

const store = createStore({
  namespaced: true,
  modules: {
    auth: authModule,
  },
});

export default store;
