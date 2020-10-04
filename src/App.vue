<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
} 
ul, li{
  padding: 0px;
  margin: 0px;
  list-style: none;
}
p {
  margin: 0;
}
button, input , textarea {
  outline: none;
}
</style>
