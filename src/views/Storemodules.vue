<template>
  <div>
    ceshistore
    <p>{{ statemoudulesx }}</p>
    <p>{{ count }}</p>
    <p>{{ countx }}</p>
    <p>{{ gettersmodulesx }}</p>
    <p>{{ setsate }}</p>
    <p>{{ setsatex }}</p>
    <p>{{ x }}</p>
    <p>{{ xx }}</p>
    <button @click="mutationsmodulesx"></button>
    <button @click="ceshiMutations({ title: 'ceshititle', text: 'ceshitext' })"></button>
    <button @click="actionsmodulesx"></button>
    <button @click="actionsThenx({ title: 'ceshititle', text: 'ceshitext' })"></button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('modulesx')
export default {
  data() {
    return {
    }
  },
  computed: {

    statemoudulesx() {
      return this.$store.state.modulesx.count
    },
    ...mapState(['count']),
    ...mapState({
      countx: 'count'
    }),

    gettersmodulesx() {
      return this.$store.getters['modulesx/setsatex']('ceshi')
    },
    ...mapGetters(['setsate', 'setsatex']),
    ...mapGetters({
      x: 'setsate',
      xx: 'setsatex'
    })
  },
  methods: {
    mutationsmodulesx() {
      this.$store.commit('modulesx/ceshiMutations', { title: 'ceshititle', text: 'ceshitext' })
      // 形式或者
      // this.$store.commit({
      //   type: 'modulesx/ceshiMutations',
      //   title: 'ceshititle',
      //   text: 'ceshitext'
      // })
    },
    ...mapMutations(['ceshiMutations']),
    ...mapMutations({
      ceshiMutationsx: 'ceshiMutations'
    }),
    actionsmodulesx() {
      this.$store.dispatch('modulesx/actionsThen', { title: 'ceshititle', text: 'ceshitext' })
    },
    ...mapActions(['actionsThen']),
    ...mapActions({
      actionsThenx: 'actionsThen'
    })
  }
}
</script>

<style>
</style>