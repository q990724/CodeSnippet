/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                zgh: {
                    yinrenhui: "#b598a1",
                    dalishihui: "#c4cbcf",
                    yunshuilan: "#baccd9",
                    dianqishihong: "#c35691",
                    shubihong: "#e3b4b8",
                },
            },
        },
    },
    plugins: [],
};
