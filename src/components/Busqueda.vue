<template>
<b-container fluid>
 <consulta-busqueda/>
</b-container>
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
</style>
