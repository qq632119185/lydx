<template>
  <select multiple>
        <option v-for="x in ceshilist" :value="x.text" :key="x.id">{{ x.text }}</option>
      </select>
</template>

<script>
export default {
    props: ['ceshilist']
}
</script>

<style>

</style>