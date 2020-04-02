const path = require("path");

module.exports = {
  entry: "./src/ts/app.ts",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: "development",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
