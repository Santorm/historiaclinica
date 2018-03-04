<template>
<b-container fluid>
 <consulta-busqueda/>
</b-container>
</template>

<script>
import consultaBusqueda from "./busqueda/consultaBusqueda"
import VueFire from 'vuefire'
export default {
  name: "busqueda",
  components: {
    consultaBusqueda
  },
  data() {
    return {
      pacientes: [],
      pacientesSelec: []
    }
  },
  method: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
