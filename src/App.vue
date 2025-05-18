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
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

#app {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

button {
  cursor: pointer;
}

input, button, select {
  font-family: inherit;
}
</style>
