<template>
  <div>
    <!-- 引用组件class -->
    <span :class="$attrs.class">This is an about page{{ prop.text }}</span>
    <!-- 或者 -->
    <span v-bind="$attrs">This is an about page{{ prop.text }}</span>
    <!-- 引用组件remove -->
    <button @click="$emit('remove', 'ceshi')">删除</button>
  </div>
</template>
<script>
export default {
  // 禁用 Attribute
  inheritAttrs: false,
  // // 类型声明
  // props: {
  //   title: {
  //     // 多个可能的类型
  //     type: [String, Number, Boolean, Array, Object, Function, Promise],
  //     // 必填
  //     required: true,
  //     // 带默认值
  //     default: 'hello',
  //     // 函数方式
  //     default() {
  //       return { message: 'hello' }
  //     },
  //     // 自定义验证函数
  //     ceshi(value) {
  //       // 这个值必须匹配下列字符串中的一个
  //       return ['success', 'warning', 'danger'].includes(value)
  //     }
  //   }
  // },
  // 引用组件prop
  props: ['prop'],
  // emits: {
  //   // 没有验证
  //   click: null,

  //   // 验证submit 事件
  //   submit: ({ email, password }) => {
  //     if (email && password) {
  //       return true
  //     } else {
  //       console.warn('Invalid submit event payload!')
  //       return false
  //     }
  //   }
  // },
  emits: ['remove']
}
</script>