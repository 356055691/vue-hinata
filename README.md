# vue-hinata

> 一个非常酷炫的组件，可以在你的项目内显示日向雏田不同时期的形象，你可以拖动她的位置。该组件只用于学习，测试，交流。如用于商业用途，与作者无关哦。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Example - basic

```javascript
// 一.全局引入
// main.js
import VueHinata from 'vue-hinata';

Vue.use(VueHinata);

// test.vue

<template>
  <VueHinata></VueHinata>
</template>
// 二.局部引入

<template>
  <VueHinata></VueHinata>
</template>

import VueHinata from 'vue-hinata';

export default {
  components: {
    VueHinata
  }
}
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
