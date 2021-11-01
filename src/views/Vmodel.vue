<template>
  <input :value="valuex" @input="$emit('vmodlevalue',$event.target.value)"/>
  <!-- 或者 -->
  <input v-model="value"/>
</template>

<script>
export default {
    props: ['valuex'],
    emits: ['vmodlevalue'],
    // 或者
    computed: {
      value: {
        get() {
          return this.valuex
        },
        set(e) {
          // console.log(e)
          this.$emit('vmodlevalue',e)
        }
      }
    }
}
</script>