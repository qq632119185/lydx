<template>
    <div>
        <slot :title="ceshi">备用内容</slot>
        <strong>
            <!-- 插槽展位 -->
            <slot name="header">备用内容</slot>
        </strong>
        <p>{{user}}</p>
        <p>{{users}}</p>
    </div>
</template>

<script>
export default {
    // 应用数据
    inject: ['user', 'users'],
    data() {
        return {
            ceshi: 'ceshititle'
        }
    }
}
</script>

<style>
</style>