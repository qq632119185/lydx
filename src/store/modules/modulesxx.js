export default {
  namespaced: true,
  state() {
    return {
      count: 'ceshimodulesxx'
    }
  },
  getters: {
    setsatexx(state, getters, rootState, rootGetters) {
      return 'setsatexx:' + state.count
    },
    // countgetterx: (state, getters) => (x) => {
    //   return state.count + 'countgetterx' + getters.countgetter + x
    // }
  },
  // mutations: {
  //   countMutations(state, x) {
  //     state.count = x.title
  //   }
  // },
  // actions: {
  //   actionsPromise({ commit }, x) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         commit('countMutations', { title: x.title, text: 'ceshitext' })
  //         resolve(alert('ceshiyibu'))
  //       }, 1000)
  //     })
  //   },
  //   actionsThen({ dispatch, commit }, x) {
  //     return dispatch('actionsPromise', x).then(() => {
  //       commit('countMutations', { title: 'ceshititle', text: 'ceshitext' })
  //     })
  //   },
  //   // 形式或者
  //   // async actionsAsync({ commit }, x) {
  //   //   setTimeout(() => {
  //   //     commit('countMutations', { title: x.title, text: 'ceshitext' })
  //   //   }, 1000)
  //   // },
  //   // async actionsThen({ dispatch, commit }, x) {
  //   //   await dispatch('actionsPromise', x)
  //   //   commit('countMutations', { title: 'ceshititle', text: 'ceshitext' })
  //   // }
  // }
}