<script setup lang="ts"></script>

<template>
    <div class="main-area p-10 w-full h-full overflow-y-auto">
        <div class="search rounded-md bg-zinc-400 h-[40px] flex overflow-hidden">
            <span class="icon h-[40px] w-[40px] flex justify-center items-center">
                <el-icon :size="20"><Search /></el-icon>
            </span>
            <input type="text" class="flex-1 outline-none box-border px-3 py-1" />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
