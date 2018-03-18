<template>
  <div class="container_header">

    <div class="logo"></div>
    <div class="pacientedata">
      <h1>Historia Clínica LunaPiel</h1>
      <span><b>Nro Historia:</b> {{getpatientSelected.hc}}</span><br>
      <span><b>Paciente:</b> {{getpatientSelected.nombre}} {{getpatientSelected.apellidos}}</span><br>
      <span><b>Nacimiento:</b> {{getpatientSelected.dateage}}</span><br>
      <span><b>Ciudad:</b> {{getpatientSelected.ciudad}}</span><br>


      <span><b>Usuario:</b> {{this.userstate}}</span>
      <b-button v-if="checklogout" @click="logout">Salir</b-button>


          </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "homeheader",
  data() {
    return {
      pacienteActivo: {},
      checklogout: true
    };
  },
  props:["userstate"],
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected"
    })
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
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
  width: 230px;
  min-width: 230px;
  background-image: url("../assets/img/logo_gold_lp.png");
  background-repeat: no-repeat;
  background-size: contain;
}

h1 {
  margin: 0 auto;
}

.btn_login {
  height: 40px;
}

.pacientedata {
  margin-left: 30px;
  width: 100%;
}

.pacientedata h1 {
  float: right;
}
</style>
