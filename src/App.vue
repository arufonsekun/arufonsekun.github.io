<template>
  <div id="app">
    <div class="flex flex-row p-2">
      <Sidebar />
    </div>
  </div>
</template>

<script>

import "@/assets/styles/index.css";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

#app {
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,
  "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",
  sans-serif,"Apple Color Emoji","Segoe UI Emoji",
  "Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 400;
  background-color: #eee ;
}
</style>
