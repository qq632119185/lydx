<template>
    <input type="text" :value="description" @input="emitValue" />
    <input ref="ceshix" />
</template>

<script>
export default {
    props: {
        description: String,
        descriptionModifiers: {
            default: () => ({})
        }
    },
    emits: ['update:description'],
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.descriptionModifiers.capitalize) {
                value = value.charAt(0).toUpperCase() + value.slice(1)
            }
            this.$emit('update:description', value)
        },
        focus() {
            this.$refs.ceshix.focus()
        }
    },
    // mounted() {
    //     this.focus()
    // }
}
</script>

<style>
</style>