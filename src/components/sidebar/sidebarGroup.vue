<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
    <div class="group">
        <div class="mb-5 border-b-2 pb-5">
            <div class="group_title flex justify-between items-center mb-2">
                <h3 class="text-gray-600 font-bold">{{ title }}</h3>
                <span class="bg-gray-400 px-2.5 py-1 rounded-md text-white">5</span>
            </div>
            <div class="group_list">
                <div class="group_item flex justify-between items-center space-y-2">
                    <h4 class="text-gray-600 font-bold text-sm cursor-pointer">#Nest.js</h4>
                    <span class="bg-gray-200 px-2.5 py-1 rounded-md">5</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
