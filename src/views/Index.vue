<script setup lang="ts"></script>

<template>
    <div class="index w-screen h-screen">
        <div class="flex justify-between w-full h-full">
            <div class="w-1/3 bg-yellow-50">
                <h1 class="text-center font-bold text-2xl border-b-2 pb-3 sticky top-0 bg-yellow-50 p-5 h-[70px]">CodeSnippet</h1>
                <div class="groups p-5 overflow-y-auto">
                    <div class="group">
                        <div class="group_title flex justify-between items-center mb-2">
                            <h3 class="text-gray-600 font-bold">TAGS</h3>
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
            </div>
            <div class="flex-1 bg-slate-500"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.groups {
    max-height: calc(100vh - 70px);
}
</style>
