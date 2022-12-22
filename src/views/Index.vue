<script setup lang="ts">
import sidebarVue from "../components/sidebar/sidebar.vue";
import mainArea from "../components/mainArea/mainArea.vue";
</script>

<template>
    <div class="index w-screen h-screen">
        <div class="flex justify-between w-full h-full">
            <div class="sidebar w-[300px] bg-zgh-yunshuilan border-r-2 border-slate-600">
                <sidebarVue></sidebarVue>
            </div>
            <div class="flex-1 bg-zgh-dalishihui main">
                <mainArea></mainArea>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    width: calc(100vw - 300px);
}
</style>
