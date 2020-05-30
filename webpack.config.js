const path = require("path")

module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            "vue$" : "vue/dist/vue.esm.js"
        }
    }
}