<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

#app {
  width: 100%;
  min-height: 100vh;
  margin-left: 60px; /* Add margin to accommodate fixed sidebar */
}

button {
  cursor: pointer;
}

input, button, select {
  font-family: inherit;
}
</style>
