<script setup lang="ts">
import sidebarTitleVue from "./sidebarTitle.vue";
import sidebarGroupVue from "./sidebarGroup.vue";
</script>

<template>
    <div class="">
        <sidebarTitleVue></sidebarTitleVue>
        <div class="groups p-5 overflow-y-auto">
            <sidebarGroupVue :title="'TAGS'"></sidebarGroupVue>
            <sidebarGroupVue :title="'LANGUAGES'"></sidebarGroupVue>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    max-height: calc(100vh - 70px);
}
</style>
