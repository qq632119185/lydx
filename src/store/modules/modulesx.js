export default {
  namespaced: true,
  state() {
    return {
      count: 'ceshimodulesx'
    }
  },
  getters: {
    setsate(state, getters, rootState, rootGetters) {
      return 'setsate:' + state.count
    },
    setsatex: (state, getters) => (x) => {
      return 'setsatex:' + state.count + getters.setsate + x
    }
  },
  mutations: {
    ceshiMutations(state, x) {
      console.log('x')
      console.log(x)
    }
  },
  actions: {
    actionsPromise({dispatch, commit, getters, rootGetters, state, rootState},x) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('ceshiMutations', { title: 'actionsPromise', text: 'ceshitext' })
          resolve(alert(x.title))
        }, 1000)
      })
    },
    actionsThen({dispatch, commit, getters, rootGetters, state, rootState}) {
      return dispatch('actionsPromise', { title: 'dispatchtitle', text: 'ceshitext' }).then(() => {
        // dispatch('rootrAction', null, { root: true })
        commit('ceshiMutations', { title: 'actionsThentitle', text: 'ceshitext' })
        commit('rootMutations', null, { root: true })
      })
    }
  }
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

