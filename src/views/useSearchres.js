import { ref, computed } from 'vue'

export default function useSearchres(res) {
    const searchres = ref('')
    const getSearchres = computed(() => {
        return res.value.filter(item => item.includes(searchres.value))
    })
    return {
        searchres,
        getSearchres
    }
}