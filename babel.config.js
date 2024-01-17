module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: "./src/assets",
          common: "./src/common",
          components: "./src/components",
          navigation: "./src/navigation",
          utils: "./src/utils",
        }
      }
    ]
  ]
};
