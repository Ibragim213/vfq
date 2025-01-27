// тут приминяется для всех сцц типо контайнер
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
ul,
li {
  Padding: 0;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

