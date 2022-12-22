<script setup lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { onMounted, ref } from "vue";
import fs from "fs";
import path from "path";
import { Action, ElMessage, ElMessageBox } from "element-plus";

interface ItemType {
    copy: number;
    tags: string[];
    key: string;
    createAt: number;
    updateAt: number;
    name: string;
    lang: string;
    value: string;
    description: string;
}

const props = defineProps<{
    item: ItemType;
}>();
let collapsed = ref(true);
const codeEl = ref<HTMLElement>();
const language = props.item.lang.toLocaleLowerCase();
const languagePath = `highlight.js/lib/languages/${language}`;
console.log(hljs.listLanguages());
hljs.registerLanguage(language, require(languagePath));
onMounted(() => {
    hljs.highlightElement(codeEl.value!);
    toggleCollapseClass();
});

function toggleCollapseClass() {
    if (!collapsed.value) {
        codeEl.value?.classList.remove("max-h-[100px]");
        codeEl.value?.classList.add("max-h-auto");
    } else {
        codeEl.value?.classList.remove("max-h-auto");
        codeEl.value?.classList.add("max-h-[100px]");
    }
}

const collapse = () => {
    collapsed.value = !collapsed.value;
    toggleCollapseClass();
};
const exportJSON = () => {
    console.log();
    fs.writeFile(path.resolve("public/export.json"), JSON.stringify(props.item), (err) => {
        ElMessageBox.alert("文件路径：项目根目录/public/export.json", "导出完成！", {
            confirmButtonText: "OK",
        });
    });
};
</script>

<template>
    <div class="item border border-slate-500 p-3 shadow-lg rounded-md bg-zinc-400 mb-5">
        <div class="title flex justify-between items-center mb-2">
            <div class="flex items-center">
                <span class="tag py-1 px-3 bg-slate-600 text-white rounded-md shadow-lg mr-2 font-bold">{{ item.lang }}</span>
                <h3>{{ item.name }}</h3>
            </div>
            <div class="icons space-x-5">
                <el-icon :size="20" class="cursor-pointer" @click="collapse">
                    <Plus v-if="collapsed" />
                    <Minus v-else />
                </el-icon>
                <el-icon :size="20" class="cursor-pointer" @click="exportJSON"><Download /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><CopyDocument /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><Edit /></el-icon>
                <el-icon :size="20" class="cursor-pointer"><Delete class="text-red-600" /></el-icon>
            </div>
        </div>
        <div class="tags flex space-x-3 mb-4">
            <div
                v-for="tag in item.tags"
                :key="tag"
                class="tag bg-purple-400 text-white text-sm px-3 py-1 rounded-2xl cursor-pointer hover:bg-purple-600"
            >
                #{{ tag }}
            </div>
        </div>
        <div class="code">
            <pre><code :class="{[language]: true}" ref="codeEl" class="rounded-md">{{item.value}}</code></pre>
        </div>
    </div>
</template>

<style lang="scss">
*::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
}
.code * {
    user-select: text;
}
</style>
