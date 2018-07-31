# Preact Widget Scripts Async

##### Bunch of common scripts used in creating a preact widget.

This package differs from preact-widget-scripts by changing the babel configuration
to support async/await with `babel-plugin-async-to-promises`.

The package can be used with the _preactjs-templates/widget_ by adding it as a development dependency

```
npm -i -D preact-widget-scripts-async-to-promises
```

And then changing the .babelrc in the root of the created project to read:

```
{
  "presets": ["preact-widget-scripts-async-to-promises/babel"]
}
```
