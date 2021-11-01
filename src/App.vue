<template>
  <div>
    <div>
      <span>{{ ceshi }}</span>
      <span v-if="ceshi ? true : false">控制渲染</span>
      <span v-once>不会更新: {{ ceshi }}</span>
      <span v-html="ceshihtml"></span>
    </div>
    <!-- ---------------------------------------------------------------------动态属性--------------------------------------------------------------------- -->
    <div>
      <!-- id -->
      <div :id="'list-' + ceshi">id动态属性</div>
      <!-- class -->
      <button :class="[{ active: isActive }, errorClass]" :disabled="isDisabled">class数组形式</button>
      <!-- style -->
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">style动态属性</div>
      <div :style="styleObject">style对象属性</div>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style数组属性</div>
    </div>
    <!-- ---------------------------------------------------------------------动态点击--------------------------------------------------------------------- -->
    <div>
      <!-- 动态属性 -->
      <a v-on:[ceshievent]="ceshiclick">测试</a>
      <!-- 按钮方式v-on: -->
      <button @click="ceshiclick($event), ceshiclick()">按钮</button>
      <div>
        <!-- -------------------------------点击修饰--------------------------------- -->
        <form @submit.prevent>只有修饰符</form>
        <a @click.stop.prevent="ceshiclick">修饰符可以串联</a>
        <button @click.exact="ceshiclick">没有任何系统修饰符被按下的时候才触发</button>
        <!-- 点击修饰click -->
        <a @click.stop="ceshiclick">阻止单击事件继续传播</a>
        <div @click.capture="ceshiclick">添加事件监听器时使用事件捕获模式，即内部元素触发的事件先在此处理，然后才交由内部元素进行处理</div>
        <div @click.self="ceshiclick">只当在 event.target 是当前元素自身时触发处理函数，即事件不是从内部元素触发的</div>
        <a @click.once="ceshiclick">点击事件将只会触发一次</a>
        <!-- 组合键盘 -->
        <div @click.ctrl="ceshiclick">Ctrl + Click</div>
        <button @click.ctrl="ceshiclick">即使 Alt 或 Shift 被一同按下时也会触发</button>
        <button @click.ctrl.exact="ceshiclick">有且只有 Ctrl 被按下的时候才触发</button>
        <!-- 表单修饰submit -->
        <form @submit.prevent="ceshiclick">提交事件不再重载页面</form>
        <!-- 滚动修饰 -->
        <div
          @scroll.passive="ceshiclick"
        >滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 `onScroll` 完成，这其中包含 `event.preventDefault()` 的情况</div>
        <!-- 表框修饰keyup -->
        <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
        <input @keyup.enter="ceshiclick" />
        <input @keyup.page-down="ceshiclick" />
        <!-- Alt + Enter -->
        <input @keyup.alt.enter="ceshiclick" />
      </div>
    </div>
    <!-- ---------------------------------------------------------------------组件遍历--------------------------------------------------------------------- -->
    <div>
      <!-- 遍历列表 -->
      <!-- <p v-for="item in todos" :key="item">{{ item.text }}</p> -->
      <!-- 或者组件 -->
      <!-- $event组件数据 -->
      <List
        class="ceshiclass"
        v-for="(item, index) in ceshilist"
        :key="item.id"
        :prop="item"
        @remove="removeCeshilist($event, index)"
      />
    </div>
    <!-- ---------------------------------------------------------------------表单样式--------------------------------------------------------------------- -->
    <div>
      <!-- 双向绑定 -->
      <input v-model="ceshi" v-focus:[trbl]="{ color: 'pink', text: 'hello' }" />
      <!-- -------------------------------Text--------------------------------- -->
      <!-- Text修饰 -->
      <input v-model.lazy.number.trim="ceshi" placeholder="edit me" />
      <!-- 或者 -->
      <input :value="ceshi" @input="ceshi = $event.target.value" />
      <p>{{ ceshi }}</p>
      <!-- -------------------------------Textarea--------------------------------- -->
      <textarea v-model="ceshi"></textarea>
      <p>{{ ceshi }}</p>
      <!-- -------------------------------Radio--------------------------------- -->
      <p v-for="x in ceshilist" :key="x.id">
        <input type="radio" :id="x.id" :value="x.text" v-model="selected" />
        <label :for="x.id">{{ x.text }}</label>
      </p>
      <p>{{ selected }}</p>
      <!-- -------------------------------Checkbox--------------------------------- -->
      <p v-for="x in ceshilist" :key="x.id">
        <input type="checkbox" :id="x.id" :value="x.text" v-model="selecteds" />
        <label :for="x.id">{{ x.text }}</label>
      </p>
      <p>{{ selecteds }}</p>
      <!-- -------------------------------Select--------------------------------- -->
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option v-for="x in ceshilist" :value="x.text" :key="x.id">{{ x.text }}</option>
      </select>
      <!-- 或者 -->
      <Selects @change="showChange" :ceshilist="ceshilist" />
    </div>
    <!-- ---------------------------------------------------------------------v-model表框组件--------------------------------------------------------------------- -->
    <div>
      <!-- $event组件数据 -->
      <Vmodel :valuex="question" @vmodlevalue="question = $event" />
      <p>{{ question }}</p>
      <p>{{ answers }}</p>
      <!-- 组件修饰 -->
      <Vmodelx v-model:description.capitalize="question" ref="ceshi"></Vmodelx>
    </div>
    <!-- ---------------------------------------------------------------------使用插槽--------------------------------------------------------------------- -->
    <Slotx>
      <template v-slot:header>
        <!-- 组件均可 -->
        <List
          class="ceshiclass"
          v-for="(item, index) in ceshilist"
          :key="item.id"
          :prop="item"
          @remove="removeCeshilist(e, index)"
        />
      </template>
      <!-- v-slot:default具名简称
      v-slot:[x]动态具名
      prop解构函数function({title})
      {title}重新命名{title: res}
      {title}默认数据{title = 'x'}-->
      <template #default="{ title }">
        <p>ceshi</p>
        测试插槽{{ title }}
      </template>
    </Slotx>
    <!-- ---------------------------------------------------------------------动态组件--------------------------------------------------------------------- -->
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <!-- ---------------------------------------------------------------------异步组件--------------------------------------------------------------------- -->
    <AsyncComponent />
    <!-- ---------------------------------------------------------------------显示位置--------------------------------------------------------------------- -->
    <teleport to="body">
      <!-- ---------------------------------------------------------------------setup应用示例--------------------------------------------------------------------- -->
      <Setups :prop="apis" title="ceshititle" />
    </teleport>
    <!-- ---------------------------------------------------------------------渲染函数--------------------------------------------------------------------- -->
    <renderObject titile="ceshirenderObject" />
    <renderFunction titile="ceshirenderFunction" />
    <renderClassx titile="ceshirenderClassx" />
    <!-- ---------------------------------------------------------------------状态管理store--------------------------------------------------------------------- -->
    <div>
      {{ countx }}
      <tr />
      {{ storecount }}
      <tr />
      {{ storecountAlias }}
      <tr />
      {{ storecountPlusLocalState }}
      <tr />
      {{ gettersx }}
      <tr />
      {{ countgetter }}
      <tr />
      {{ storegetter }}
      <button @click="storeMutations"></button>
      <button @click="actionsclick"></button>
      <Storemodules />
    </div>
    <!-- ---------------------------------------------------------------------路由管理router--------------------------------------------------------------------- -->
    <div>
      <router-link to="/">routerx</router-link>
      <router-link to="/routerxx/routeparamsceshi">routerlink</router-link>
      <router-link to="/routerxx/routeparamsceshi/childrenx/from-newsletter">routerlink</router-link>
      <router-link to="/routerxx/routeparamsceshi/childrenxx">routerlink</router-link>
      <router-view />
    </div>
    <p>{{titleludashix}}</p>
    <button @click="ludashix(ceshiludashix, 1000)()">ceshiludashix</button>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import List from "./views/List.vue"
import Vmodel from "./views/Vmodel.vue"
import Slotx from "./views/Slotx.vue"
import Selects from "./views/Selects.vue"
import Vmodelx from "./views/Vmodelx.vue"
import Iscomponents from "./views/Iscomponents.vue"
import Setups from "./views/Setups.vue"
import { mixinsx } from "./views/mixinx.js"
import { renderObject, renderFunction, renderClassx } from "./views/Templatesx.js"
import Storemodules from "./views/Storemodules.vue"
import _ from 'lodash'
import ludashix from './untils/ludashix.js'
export default {
  directives: {
    focus: {
      // 指令的定义
      mounted(el, binding) {
        // console.log(el, binding)
        el.style.color = binding.value.color
        const x = binding.arg || 'left'
        el.style[x] = '10px'
        // console.log(binding.value.text)
      }
    }
  },
  //整理组件
  mixins: [mixinsx],
  // 应用组件
  components: {
    Storemodules,
    renderObject,
    renderFunction,
    renderClassx,
    List,
    Vmodel,
    Slotx,
    Selects,
    Vmodelx,
    Iscomponents,
    Setups,
    // 异步组件
    AsyncComponent: defineAsyncComponent(() =>
      import('./views/AsyncComponents.vue')
    ),
    // 详细设置
    // AsyncComponent: defineAsyncComponent({
    //   // 工厂函数
    //   loader: () => import('./views/AsyncComponents.vue'),
    //   // 加载异步组件时要使用的组件
    //   loadingComponent: LoadingComponent,
    //   // 加载失败时要使用的组件
    //   errorComponent: ErrorComponent,
    //   // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
    //   delay: 200,
    //   // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
    //   // 默认值：Infinity（即永不超时，单位 ms）
    //   timeout: 3000,
    //   // 定义组件是否可挂起 | 默认值：true
    //   suspensible: false,
    //   /**
    //    *
    //    * @param {*} error 错误信息对象
    //    * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
    //    * @param {*} fail  一个函数，指示加载程序结束退出
    //    * @param {*} attempts 允许的最大重试次数
    //    */
    //   onError(error, retry, fail, attempts) {
    //     if (error.message.match(/fetch/) && attempts <= 3) {
    //       // 请求发生错误时重试，最多可尝试 3 次
    //       retry()
    //     } else {
    //       // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
    //       // 必须调用其中一个才能继续错误处理。
    //       fail()
    //     }
    //   }
    // })
  },
  // 共享数据
  provide() {
    const users = ref(computed(() => this.ceshilist.length))
    // 默认静态
    return {
      // 非响应式
      user: 'John Doe',
      // 响应数据
      users: users.value
    }
  },
  //处理数据
  data() {
    return {
      titleludashix: 1,
      trbl: 'top',
      apis: 'users',
      ceshi: '这是标题',
      ceshilist: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' }
      ],
      ceshihtml: '<span style="color: pink">v-html解析内容</span>',
      isDisabled: false,
      isActive: true,
      hasError: false,
      ceshievent: 'click',
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      errorClass: {
        activeClass: 'active',
        errorClass: 'text-danger'
      },
      activeColor: 'pink',
      fontSize: 14,
      styleObject: {
        color: 'pink',
        fontSize: '14px'
      },
      selected: '',
      selecteds: []
    }
  },
  //自动方式
  computed: {
    //直接使用
    answers: {
      // getter
      get() {
        return this.question + ' ' + this.answer
      },
      // setter如果this.answers = 'ceshi'会自动调用这个方式
      set(newValue) {
        // console.log(newValue)
      }
    },
    currentView() {
      return Iscomponents
    },
    // ---------------------------------------------------------------------状态管理store---------------------------------------------------------------------
    // 普通形式this
    gettersx() {
      return this.$store.getters.countgetterx('ceshi')
    },
    // 数组形式
    ...mapGetters(['countgetter']),
    // 对象形式
    ...mapGetters({
      storegetter: 'countgetter'
    }),
    // 普通形式this
    countx() {
      return this.$store.state.count
    },
    // 简单形式
    ...mapState({
      // 箭头函数可使代码更简练
      storecount: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      storecountAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      storecountPlusLocalState(state) {
        return state.count + this.ceshi
      }
    })
  },
  //自动方式
  watch: {
    //监听question数据
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.ceshiclick()
        // console.log(newQuestion, oldQuestion)
      }
    }
  },
  //处理方式
  methods: {
    ceshiclickxiushi() {
      console.log('xiushi')
    },
    ceshiclickxiushix() {
      console.log('xiushix')
    },
    ludashix,
    ceshiludashix() {
      this.titleludashix++
    },
    ceshiclick(e) {
      this.ceshi = this.ceshi
        .split('')
        .reverse()
        .join('')
      this.answers = 'ceshi'
      // console.log(e)
    },
    removeCeshilist(e, index) {
      this.ceshilist.splice(index, 1)
      console.log(e)
    },
    // 监听组件value
    showChange(e) {
      this.selecteds = e.target.value
    },
    storeMutations() {
      // 调用方式
      this.$store.commit('countMutations', { title: 'ceshititle', text: 'ceshitext' })
      // 方式或者
      // this.$store.commit({
      //   type: 'countMutations', 
      //   title: 'ceshititle',
      //   text: 'ceshitext'
      // })
    },
    // 数组形式
    ...mapMutations(['countMutations']),
    // 对象形式
    ...mapMutations({
      xiugai: 'countMutations'
    }),
    actionsclick() {
      // 调用异步
      this.$store.dispatch('actionsThen', { title: 'actionsPromise', text: 'ceshitext' })
      // 形式或者
      // this.$store.dispatch({
      //   type: 'actionsPromise',
      //   title: 'actionsPromise',
      //   text: 'ceshitext'
      // })
    }
  },
  // 生命周期
  beforeCreate() { },
  created() {
    // 用 Lodash 的防抖函数
    this.debouncedClick = _.debounce(this.ceshiclick, 1000)
  },
  beforeMount() { },
  mounted() {
    // 组件名称
    // this.$refs.ceshi.focus()
    // 自动定时
    // setInterval(() => {
    //   this.ceshiclick()
    // }, 1000)
  },
  beforeUpdate() { },
  updated() { },
  beforeUnmount() { },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  errorCaptured() { },
  renderTracked() { },
  renderTriggered() { },
  activated() { },
  deactivated() { }
}
</script>

<style>
.xiushi {
  background: pink;
  width: 444px;
  height: 444px;
}
.xiushix {
  background: white;
  width: 44px;
  height: 44px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
