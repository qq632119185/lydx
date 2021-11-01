<template>
  <div>
    routerx
    <button @click="routerPush">routerPush</button>
    <button @click="routerReplace">routerReplace</button>
    {{ceshisetData}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      ceshisetData: 'ceshisetData'
    }
  },
  methods: {
    routerPush() {
      // 声明方式
      // <router-link to="/routerxx/routeparamsceshi"></router-link>
      // 编程方式
      this.$router.push('/routerxx/routeparamsceshi')
    },
    routerReplace() {
      // <router-link to="/routerxx/routeparamsceshi" replace>routerlinkreplace</router-link>
      // 不留记录
      this.$router.replace('/routerxx/routeparamsceshi')
      // // 向前移动一条记录，与 router.forward() 相同
      // router.go(1)
      // // 返回一条记录，与router.back() 相同
      // router.go(-1)
    }
  },
  created() {
    // ------------------------------watch使用方式-----------------------
    // thia.$watch('x',callback,{deep: true, immediate: true}) //deep深浅拷贝//immediate立即调用
    this.$watch(() => this.$route.params, (toParams, previousParams) => {
      // 对路由变化做出响应...
    })
  },
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id)
  },
  // ---------------------------------------------------------------------组件守卫---------------------------------------------------------------------
  // --------------------------------------渲染组件-----------------------
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$data.ceshisetData = 'x'
      // 通过 `vm` 访问组件实例
    })
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  // --------------------------------------复用组件-----------------------
  // beforeRouteUpdate(to, from) {
  //   // just use `this`
  //   this.name = to.params.name
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  //   // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  // },
  // --------------------------------------离开组件-----------------------
  // beforeRouteLeave(to, from) {
  //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  //   if (!answer) return false
  //   // 在导航离开渲染该组件的对应路由时调用
  //   // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  // }
}
</script>

<style>
</style>