const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports= {
    entry: {
        //Point d'entrer
        main: path.join(__dirname, "src/index.js")
    },
    output: {
        //Notre bundle
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,//Regex : recupere tout les fichier.js
                exclude: /(node_modules)/, //on exclure le dossier node_module
                use: ["babel-loader"] //les fichier .js recuperer seront passer au traver de babel-loader pour creer notre  bundle
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ],
    stats: "minimal",
    devtool: "source-map",
    mode: "development",
    devServer: {
        open: false, //Nouvre pas le server si il n'est ouvert
        contentBase: "./dist",
        inline: true,
        port: 4000
    }

};