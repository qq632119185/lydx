import { createStore } from 'vuex'
import modulesx from './modules/modulesx.js'
import modulesxx from './modules/modulesxx.js'
export default createStore({
  state() {
    return {
      count: 'ceshicreateStore'
    }
  },
  getters: {
    countgetter(state) {
      return state.count + 'countgetter'
    },
    countgetterx: (state, getters) => (x) => {
      return state.count + 'countgetterx' + getters.countgetter + x
    }
  },
  mutations: {
    countMutations(state, x) {
      state.count = x.title
    },
    rootMutations() {
      alert('rootMutations')
    }
  },
  actions: {
    actionsPromise({ commit }, x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('countMutations', { title: x.title, text: 'ceshitext' })
          resolve(alert('ceshiyibu'))
        }, 1000)
      })
    },
    actionsThen({ dispatch, commit }, x) {
      return dispatch('actionsPromise', x).then(() => {
        commit('countMutations', { title: 'ceshititle', text: 'ceshitext' })
      })
    },
    // 形式或者
    // async actionsAsync({ commit }, x) {
    //   setTimeout(() => {
    //     commit('countMutations', { title: x.title, text: 'ceshitext' })
    //   }, 1000)
    // },
    // async actionsThen({ dispatch, commit }, x) {
    //   await dispatch('actionsPromise', x)
    //   commit('countMutations', { title: 'ceshititle', text: 'ceshitext' })
    // }
  },
  modules: {
    modulesx,
    modulesxx
  }
})