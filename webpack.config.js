const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html",
  filename: "./index.html"
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./client/index.tsx",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "bundle.js"
    },
    plugins: [htmlPlugin,  new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),],
    module: {
     
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: { name: '/static/[name].[ext]' }
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "ts-loader",
        }
    }
   
      ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
   
  };
};