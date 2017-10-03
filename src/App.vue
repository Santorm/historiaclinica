<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
/* html {

  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
} */
body, html{
  height: 100vh;
  margin: 0 auto;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  margin: 0;
  padding: 0;
}



.btn_primario {
  border: 1px solid grey;
  /* background-color: aliceblue; */
  border-radius: 5px;
}
</style>
