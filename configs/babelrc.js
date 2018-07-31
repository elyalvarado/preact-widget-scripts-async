var isTest = (process.env.BABEL_ENV || process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    [
      require.resolve("babel-preset-env"),
      {
        loose: true,
        uglify: true,
        modules: isTest ? "commonjs" : false,
        targets: {
          browsers: ["> 100%", "last 200 versions", "IE >= 19"]
        },
        exclude: ["transform-regenerator", "transform-es2015-typeof-symbol", "transform-async-to-generator"]
      }
    ]
  ],
  plugins: [
    require.resolve("babel-plugin-transform-object-assign"),
    require.resolve("babel-plugin-transform-decorators-legacy"),
    require.resolve("babel-plugin-transform-react-constant-elements"),
    require.resolve("babel-plugin-transform-react-remove-prop-types"),
    require.resolve('babel-plugin-transform-export-extensions'),
    require.resolve('babel-plugin-transform-class-properties'),
    require.resolve('babel-plugin-transform-object-rest-spread'),
    require.resolve('babel-plugin-syntax-dynamic-import'),
    require.resolve('babel-plugin-async-to-promises'),
    [require.resolve("babel-plugin-transform-react-jsx"), { pragma: "h" }],
    [
      require.resolve("babel-plugin-jsx-pragmatic"),
      {
        module: "preact",
        export: "h",
        import: "h"
      }
    ]
  ]
};
