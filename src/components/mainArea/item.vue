<script setup lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { onMounted } from "vue";
onMounted(() => {
    hljs.highlightAll();
});
const html = `const hljs = require('highlight.js/lib/core');hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));const highlightedCode = hljs.highlight('<span>Hello World!</span>', {language: 'xml'}).value`;
</script>

<template>
    <div class="item border border-slate-500 py-1 px-3 shadow-lg rounded-md bg-zinc-400 mb-5">
        <div class="title flex justify-between items-center mb-2">
            <div class="flex items-center">
                <span class="tag py-1 px-3 bg-slate-600 text-white rounded-md shadow-lg mr-2 font-bold">TypeScript</span>
                <h3>定义拦截器</h3>
            </div>
            <div class="icons space-x-5">
                <el-icon :size="20" class="cursor-pointer"><Download /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><CopyDocument /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><Edit /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><Delete class="text-red-600" /></el-icon>
            </div>
        </div>
        <div class="tags flex space-x-3 mb-4">
            <div class="tag bg-purple-400 text-white text-sm px-3 py-1 rounded-2xl cursor-pointer hover:bg-purple-600">#Nest.js</div>
        </div>
        <div class="code bg-slate-500 p-5 rounded-md">
            <pre><code class="javascript" :spellcheck="false">{{ html }}</code></pre>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
