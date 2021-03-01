<template>
  <div id="app">
    <div class="flex flex-row p-2">
      <Sidebar />
      <div class="
        p-1
        flex
        justify-center
        working-in-progress 
      ">
        <h1>
          Work in progress...
        </h1>
      </div>
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

.working-in-progress {
  align-items: center;
  font-size: 4rem;
  height: 97vh;
  width: 75%;
  animation: color-change 5s infinite;
}

@keyframes color-change {
  5%{color: #2C2549;}
  10%{color: #27264B;}
  15%{color: #282E4C;}
  20%{color: #2A364E;}
  25%{color: #2c3e50;}
  30%{color: #455869;}
  35%{color: #5F7282;}
  40%{color: #798C9A;}
  45%{color: #94A5B1;}
  50%{color: #B0BEC7;}
  55%{color: #B0BEC7;}
  60%{color: #94A5B1;}
  65%{color: #798C9A;}
  70%{color: #5F7282;}
  75%{color: #455869;}
  80%{color: #2c3e50;}
  85%{color: #2A364E;}
  90%{color: #282E4C;}
  95%{color: #27264B;}
  100%{color: #2C2549;}
}
</style>
