<template>
  <div class="container_header">
    <div class="logo">LOGOTIPO</div>
    <div class="pacientedata">
      <h1>Historia Clínica LunaPiel</h1>
      <span>Nro Historia: {{getpatientSelected.historiaclinica}}</span><br>
      <span>Paciente: {{getpatientSelected.nombre}} {{getpatientSelected.apellidos}}</span><br>
      <span>Nacimiento: {{getpatientSelected.dateage}}</span><br>
      <span>Ciudad: {{getpatientSelected.ciudad}}</span>
      
      <!-- <router-link to="/login">
        <md-button class="btn_login md-raised md-primary">Iniciar Sesión</md-button>
      </router-link> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
  name: 'homeheader',
  data() {
    return {
      pacienteActivo: {},
    }
  },
  computed: {
    ...mapGetters({
      getpatientSelected: 'getpatientSelected'   
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_header {
  width: 100%;
  /* height: 100%; */
  height: 20vh;
  min-height: 152px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 1%;
}

.logo {
      width: 250px;
    min-width: 250px;;
  /* border: 1px solid black; */
  /* height: 10%; */
}

h1 {
  margin: 0 auto;
}

.btn_login {
  height: 40px;
}
</style>
