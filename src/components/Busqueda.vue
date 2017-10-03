<template>
<div class="container">
 
  <div class="busqueda">
 <consulta-busqueda/>
  </div>
  
</div>
</template>

<script>
import consultaBusqueda from './busqueda/consultaBusqueda'
export default {
  name: 'busqueda',
  components:{
    consultaBusqueda
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .container{
  background-color: aliceblue;
} */

.busqueda{
  margin: 100px auto;
  width: 100%;
  min-width: 200px; 
  /* border: 1px solid grey; */
  border-radius: 5px;
  padding: 20px 100px;
  /* height: fit-content; */
  /* background-color: rgba(128, 128, 128, 0.14); */
 
}


</style>
