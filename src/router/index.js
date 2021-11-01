import { createRouter, createWebHashHistory } from 'vue-router'
import Routerx from "../components/Routerx.vue"
// ---------------------------------------------------------------------独享守卫function---------------------------------------------------------------------
// function removeQueryParams(to) {
//   if (Object.keys(to.query).length)
//     return { path: to.path, query: {}, hash: to.hash }
// }

// function removeHash(to) {
//   if (to.hash) return { path: to.path, query: to.query, hash: '' }
// }

const routes = [
  {
    path: '/',
    name: 'Routerx',
    component: Routerx,
    // --------------------------------------重新定向---------------------------------------
    // redirect: '/routerxx',
    // redirect: to => {
    //   // 方法接收目标路由作为参数
    //   // return 重定向的字符串路径/路径对象
    // },
    // ---------------------------------------------------------------------独享守卫---------------------------------------------------------------------
    // beforeEnter: (to, from) => {
    //   return false
    // },
    // 数组形式
    // beforeEnter: [removeQueryParams, removeHash],
    // ---------------------------------------------------------------------元信息守卫---------------------------------------------------------------------
    // 只有经过身份验证的用户才能创建帖子
    // meta: { requiresAuth: true },
    // 任何人都可以阅读文章
    // meta: { requiresAuth: false }
  },
  {
    path: '/routerxx/:routeparams',
    component: () => import(/* webpackChunkName: "routerxx" */ '../components/Routerxx.vue'),
    // -----------------------------params变身形式props--------------------------------------
    // :routeparams组件使用
    props: true,
    children: [
      {
        path: 'childrenx/from-newsletter',
        // -------------------------------动态路由--------------------------------------------------
        component: () => import(/* webpackChunkName: "Childrenx" */ '../components/Childrenx.vue'),
        // -------------------------params对象形式props---------------------------------------------
        props: {
          ceshi: '对象形式ceshi',
          ceshix: '对象形式ceshix'
        },
        // --------------------------params函数形式props-------------------------------------------
        // props: route => ({ query: route.query.q })
      },
      {
        path: 'childrenxx',
        components: {
          default: () => import(/* webpackChunkName: "childrenxx" */ '../components/Childrenxx.vue'),
          ceshi: () => import(/* webpackChunkName: "childremxxceshi" */ '../components/Childrenxx/childremxxceshi.vue'),
          // ------------------------params多个路由props-------------------------------------------
          props: { default: true, ceshi: false }
        }
      }
    ]
  },
  // ---------------------------------------------------------------------正则方式---------------------------------------------------------------------
  // // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // ---------------------------------------------------------------------滚动行为--------------------------------------------------------------------
  scrollBehavior(to, from, savedPosition) {
    // ---------------------------return滚动到的位置---------------------
    return {
      // 始终在元素 #main 下方滚动 10px
      el: '#app',
      // 或者el: document.getElementById('main'),
      top: 10,
    }
    // ---------------------------按下后退/前进按钮----------------------
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }
    // ------------------------------滚动到锚点------------------------
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     // 浏览器支持
    //     behavior: 'smooth',
    //   }
    // }
    // ------------------------------延迟滚动------------------------
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ left: 0, top: 0 })
    //   }, 500)
    // })
  }
})
// ---------------------------------------------------------------------导航守卫---------------------------------------------------------------------
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// ---------------元信息守卫--------------------------
// 而不是去检查每条路由记录
// to.matched.some(record => record.meta.requiresAuth)
// if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//   // 此路由需要授权，请检查是否已登录
//   // 如果没有，则重定向到登录页面
//   return {
//     path: '/login',
//     // 保存我们所在的位置，以便以后再来
//     query: { redirect: to.fullPath },
//   }
// }
// })
// // 或者
// router.beforeEach(async (to, from) => {
//   // canUserAccess() 返回 `true` 或 `false`
//   return await canUserAccess(to)
// })
// ---------------------------------------------------------------------解析守卫---------------------------------------------------------------------
// router.beforeResolve(async to => {
//   if (to.meta.requiresCamera) {
//     try {
//       await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         // ... 处理错误，然后取消导航
//         return false
//       } else {
//         // 意料之外的错误，取消导航并把错误传给全局处理器
//         throw error
//       }
//     }
//   }
// })
// ---------------------------------------------------------------------后置守卫---------------------------------------------------------------------
// router.afterEach((to, from, failure) => {
//   if (!failure) sendToAnalytics(to.fullPath)
// })
export default router
