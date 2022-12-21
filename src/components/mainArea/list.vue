<script setup lang="ts">
import itemVue from "./item.vue";
</script>

<template>
    <div class="list mt-5">
        <itemVue v-for="i in 5" :key="i"></itemVue>
    </div>
</template>

<style scoped lang="scss"></style>
