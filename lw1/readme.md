# Автоматизация окружения и сборка проектов

## Автоматизация окружения

### Пример: Простой сервер

```cmd
npm install http-server --save-dev
```

```cmd
"server": "http-server"
```

### Пример: Валидация HTML и JS

```cmd
npm install html-validate jshint --save-dev
```

```cmd
"validate-html": "html-validate index.html",
"validate-js": "jshint main.js"
```

```cmd
npm install npm-watch --save-dev
```

```
"watch": "npm-watch",
```

```
"watch": {
  "validate-html": "index.html",
  "validate-js": "main.js"
},
```

## Сборка проекта

### Пример: Сборка с помощью WebPack

```
npm install webpack webpack-cli
```

```
webpack.config.js
```

```js
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
};
```

### Пример: Сборка модулей

```
npm install css-loader style-loader
```

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### Пример: Dev Сервер

```
npm install webpack-dev-server
```

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    static: "./public",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
```
