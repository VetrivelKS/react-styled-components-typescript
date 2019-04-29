const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App/index.js",
  mode: "development",
  module: {
    rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx",".ts",".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src/App/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
    // historyApiFallback: true, 
    // if we directly hit some other page, historyApiFallback should be set to load em
    // or else `Cannot GET /pagetwo` error will be thrown
    // @see https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};