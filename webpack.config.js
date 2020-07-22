const path = require("path")

module.exports = {
    entry: "./src/ListView.tsx",
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}