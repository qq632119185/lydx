<template>
    <div>
        setup
        <p>{{ prop }}</p>
        <p v-for="(item, index) in getSearchres" :key="index">{{ item }}</p>
        <input v-model="searchres" />
        <Setupsx ref="x"/>
        <button @click="hadelClickexpose"></button>
        <Setupsp />
        <Setupst />
    </div>
</template>

<script>
import { provide, reactive, toRefs, ref, readonly } from 'vue'
import useRes from './useRes.js'
import useSearchres from './useSearchres.js'
import Setupsx from './Setupsx.vue'
import Setupsp from './Setupsp.vue'
import Setupst from './Setupst.vue'
export default {
    components: {Setupsx, Setupsp, Setupst},
    props: {
        prop: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        // 非响应式
        const { attrs, slots, emit, expose } = context
        // 保持响应
        const { prop } = toRefs(props)
        // 异步列表
        const { res, getRes } = useRes(prop)
        // 搜索展示
        const { searchres, getSearchres } = useSearchres(res)
        //自定响应
        const arrays = ref('Vege')
        const objects = reactive({
            title: 'Vegetables',
            color: 'pink'
        })
        // 修改方式value
        const hadelProvide = () => arrays.value = 'ceshihadelProvide'
        // 共享数据
        provide('arrays', arrays)
        // 只读属性
        provide('objects', readonly(objects))
        provide('hadelProvide', hadelProvide)
        // 应用数据
        return {
            res,
            getRes,
            searchres,
            getSearchres
        }
    },
    methods: {
        hadelClickexpose() {
            // 使用函数expose
            this.$refs.x.increment()
        }
    }
}
</script>

<style>
</style>