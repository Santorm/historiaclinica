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
  margin: 10px auto;
  width: 90%;
  min-width: 200px; 
  border-radius: 5px;
  
 
}


</style>
