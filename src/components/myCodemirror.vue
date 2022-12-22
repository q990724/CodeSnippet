<template>
    <div class="in-coder-panel">
        <textarea ref="codeform" v-model="code" class="codemirror"></textarea>
    </div>
</template>
<script>
import { watch, onMounted, onBeforeUnmount, ref } from "vue";
// 引入全局实例
import _CodeMirror from "codemirror";

// 核心样式
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
// 引入主题后还需要在 options 中指定主题才会生效
const themList = [];
const requireModules = require.context("codemirror/theme/", false, /.css$/);
requireModules.keys().forEach((value) => {
    const newValue = value.replace(/^.\//, "").replace(/.css$/, "");
    themList.push(newValue);
});

// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// import "codemirror/addon/selection/active-line";
// import "codemirror/addon/display/aoturefresh";
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/mode/python/python.js";
import "codemirror/mode/r/r.js";
import "codemirror/mode/shell/shell.js";
import "codemirror/mode/sql/sql.js";
import "codemirror/mode/swift/swift.js";
import "codemirror/mode/vue/vue.js";
import "codemirror/mode/yaml/yaml.js";
//import "codemirror/mode/yaml-frontmatter/yaml-frontmatter.js";
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/addon/lint/yaml-lint");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/anyword-hint");
require("codemirror/addon/display/autorefresh");

// 尝试获取全局实例
const CodeMirror = window.CodeMirror || _CodeMirror;

export default {
    emits: ["onUpdate:value"],
    props: {
        id: {
            type: Number,
            default: 0,
        },
        // 外部传入的内容，用于实现双向绑定
        value: {
            type: String,
            default: "",
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        // 可用事件'change', 'blur'等等；具体参考codemirror文档
        eventType: {
            type: String,
            default: "blur",
        },
        // 外部传入的语法类型
        language: {
            type: String,
            default: "x-yaml",
        },
        // 编辑器主题色
        theme: {
            type: String,
            default: "mbo",
        },
    },
    setup(props, { emit }) {
        const codeform = ref(null);
        const code = ref(props.value);
        let editor = null;
        let options = {};
        let modes = {};
        // 默认配置
        options = {
            mode: "text/x-yaml",
            tabSize: 1, // 缩进格式
            indentWithTabs: true,
            smartIndent: true,
            lineWrapping: true,
            lineNumbers: true,
            matchBrackets: true,
            indentUnit: 4,
            autoRefresh: true,
            theme: props.theme ? props.theme : "mbo",
            lint: false,
            lineWiseCopyCut: false,
            readOnly: props.readonly === false ? false : "nocursor", // true: 不可编辑  false: 可编辑 'nocursor' 失焦,不可编辑
            extraKeys: { Ctrl: "autocomplete" }, //自定义快捷键
            hintOptions: {},
            // matchBrackets: true,
            // foldGutter: true,
            // gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        };
        modes = {
            css: "text/css",
            javascript: "text/javascript",
            "xml/html": "text/html",
            yaml: "text/x-yaml",
            java: "text/x-java",
            "objective-c": "text/x-objectivec",
            python: "text/x-python",
            r: "text/x-rsrc",
            shell: "text/x-sh",
            sql: "text/x-sql",
            swift: "text/x-swift",
            vue: "text/x-vue",
            markdown: "text/markdown",
        };
        // 初始化
        function initialize() {
            if (editor) {
                editor.toTextArea();
            }
            if (props.language) {
                let lan = props.language.toLowerCase();
                let modeObj = modes[lan] ? modes[lan] : "";
                options.mode = modeObj ? modeObj : options.mode;
            }
            editor = CodeMirror.fromTextArea(codeform.value, options);
            /*editor.on("keyup", function () {
          editor.showHint();
        });*/
            // 支持双向绑定
            editor.on(props.eventType, (coder) => {
                if (emit) {
                    emit("onUpdate:value", coder.getValue());
                }
            });
        }
        // 动态引入语法高亮库
        function themeImport() {
            return new Promise((resolve) => {
                themList.forEach((value) => {
                    if (props.theme === value) {
                        import(`codemirror/theme/${props.theme}.css`);
                        resolve();
                    }
                });
            });
        }
        watch(
            () => props.id,
            () => {
                themeImport().then(() => {
                    initialize();
                });
            }
        );
        watch(
            () => props.value,
            (newProps) => {
                code.value = editor ? editor.setValue(newProps) : "";
                editor.refresh();
            }
        );
        onMounted(() => {
            themeImport().then(() => {
                initialize();
            });
        });
        onBeforeUnmount(() => {
            editor.off(props.eventType);
        });
        return {
            code,
            codeform,
            initialize,
        };
    },
};
</script>
