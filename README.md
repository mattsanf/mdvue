# mdvue
Render vue components from markdown files.

---
# Example
`home.mdvue`
```markdown
import HelloWorld from '@/components/HelloWorld'
import ByeWorld from '@/components/ByeWorld'

# Title
Hello world
<HelloWorld v-slot="{msg}">
    <ByeWorld :item="msg"/>
</HelloWorld>

## Subtitle
Some markdown content

<style>
    h1 {
        color: cornflowerblue;
    }
</style>
```
---
`vue.config.js`
```javascript
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mdvue$/,
                    use: [
                        {
                            loader: 'vue-loader'
                        },
                        {
                            loader: 'mdvue-loader'
                        }
                    ]
                }
            ]
        }
    }
};
```
---
`app.vue`
```javascript
<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from 'home.mdvue';

export default {
  name: 'app',
  components: {
    home,
  }
}
</script>
```

## Thanks
* [vmark-loader](https://github.com/egoist/vmark-loader)
