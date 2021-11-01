<script>
import {inject} from 'vue'
export default {
    setup() {
        // 共享数据
        const arraysx = inject('arrays')
        const objectsx = inject('objects')
        const hadelProvidex = inject('hadelProvide')
        // console.log(arrays,objects)
        return () => <div>
        <p title={objectsx.title}>{arraysx.value}</p>
        <button style={objectsx} onClick={() => hadelProvidex()}></button>
        </div>
    }
}
</script>