<script>
import { ref, reactive, h, inject } from 'vue'
export default {
    setup(props, { expose }) {
        // 自定响应
        const readersNumber = ref(0)
        // 响应对象
        const book = reactive({ title: 'VueGuide' })
        // 定义方式
        const increment = () => ++readersNumber.value
        // 暴露函数
        expose({
            increment
        })
        return () => h('div', [readersNumber.value, book.title])
    }
}
</script>