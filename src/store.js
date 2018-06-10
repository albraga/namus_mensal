import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		msg: 'meow from vuex',
		title: 'from store me clique!',
		author: 'author: Braga',
    cidade: '???'
  },
  mutations: {
    msgMutation(state, payload) {
      state.msg = payload + ' mutations';
    },
    cidadeMutation(state, payload) {
      state.cidade = payload;
    }
  },
  actions: {
		msgAction(context, payload) {
      context.commit('msgMutation', payload + ' actions atualizado');
    },
    cidadeAction(context, payload) {
      context.commit('cidadeMutation', payload);
    }
  },
  getters: {
    getmsg(state) {
      return state.msg;
    }
  }
})
