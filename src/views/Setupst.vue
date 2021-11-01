<template>
    <div ref="root">This is a root element</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const root = ref(null)

        onMounted(() => {
            // DOM 元素将在初始渲染后分配给 ref
            // console.log(root.value) // <div>This is a root element</div>
        })
        //   或者
        // watchEffect(() => {
        //     // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
        //     console.log(root.value) // => <div>This is a root element</div>
        // },
        //     {
        //         flush: 'post'
        //     })

        return {
            root
        }
    }
}
</script>