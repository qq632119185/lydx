import { ref, onMounted, watch } from 'vue'
import { fetchUser } from './apis.js'

export default function useRes(prop) {
    const res = ref([])
    const getRes = async () => {
        res.value = await fetchUser(prop.value)
    }
    onMounted(getRes)
    watch(prop, getRes)
    // 使用方式
    // watch(users,(newValue, oldValue) => {})
    // watch: {
    //     users(newValue, oldValue) {}
    // }
    return {
        res,
        getRes,
    }
}