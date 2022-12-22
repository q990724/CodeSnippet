<script setup lang="ts">
import itemVue from "./item.vue";
import data from "../../../public/data.json";
</script>

<template>
    <div class="list mt-5">
        <itemVue v-for="item in data" :key="item.key" :item="item"></itemVue>
    </div>
</template>

<style scoped lang="scss"></style>
