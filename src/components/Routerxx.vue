<template>
  <div>
    routerxx
    <button @click="routerPush">routerx:{{routeparams}}</button>
    <div>{{ paramsx }}</div>
    <router-view />
    <router-view name="ceshi"/>
  </div>
</template>

<script>
export default {
  props: ['routeparams'],
  data() {
    return {
    }
  },
  computed: {
    paramsx() {
      return this.$route.params.routeparams
    }
  },
  methods: {
    routerPush() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>