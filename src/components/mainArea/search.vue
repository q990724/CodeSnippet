<script setup lang="ts"></script>

<template>
    <div class="search rounded-md bg-zinc-400 h-[40px] flex overflow-hidden">
        <span class="icon h-[40px] w-[40px] flex justify-center items-center">
            <el-icon :size="20"><Search /></el-icon>
        </span>
        <input placeholder="keyword" type="text" class="flex-1 outline-none box-border px-2 py-1 bg-transparent placeholder:text-gray-500" />
        <div class="create flex justify-center items-center px-2 bg-slate-600 text-white cursor-pointer">
            <el-icon><Plus class="font-bold" /></el-icon>
            <span class="ml-1 font-bold">Create</span>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
