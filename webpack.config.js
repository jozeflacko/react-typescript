const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {

    /* Enable sourcemaps for debugging webpack"s output. */
    // devtool: "source-map",
    devtool: 'inline-source-map',

    /* Mocks the FS module in the browser */
    node: {
        fs: "empty"
    },
    /*
     * src.ts represents the entry point to your web application. Webpack will
     * recursively go through every "require" statement in src.ts and
     * efficiently build out the application"s dependency tree.
     */
    entry: {
        main: ["./src/pages/main/main.tsx"],
        detail:["./src/pages/detail/detail.tsx"],
        vendor: ['react', 'react-dom']
    },
    /*
     * The combination of path and filename tells Webpack what name to give to
     * the final bundled JavaScript file and where to store this file.
     */
    output: {
        path: path.resolve(__dirname, "target"),
        filename: "[name].bundle.js"
    },
    /*
     * resolve lets Webpack now in advance what file extensions you plan on
     * "require"ing into the web application, and allows you to drop them
     * in your code.
     */
    resolve: {
        alias: {
            
        },
        extensions: [".ts", ".tsx", ".js"]       
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }           
        ]
    },
    /*
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html')             
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    */
    
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }


};

module.exports = config;