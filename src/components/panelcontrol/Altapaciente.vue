<template>

  <b-container fluid>

    <b-input-group  class="inputgroup" prepend="Nombre">
          <b-form-input v-model="value.nombre"  name="nombre" ></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Apellidos">
          <b-form-input  v-model="value.apellidos"  name="apellidos" ></b-form-input>
    </b-input-group>
  <b-input-group class="inputgroup" prepend="Nacimiento">
          <b-form-input v-model="value.dateage"></b-form-input>
  </b-input-group>
  <b-input-group class="inputgroup" prepend="Género">
      <b-form-select placeholder="genero" v-model="value.genero" name="genero" :options="getoptionGenero" />
  </b-input-group>
    <b-input-group class="inputgroup" prepend="Teléfono">
      <b-form-input v-model="value.telefono"  name="telefono"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Dirección">
      <b-form-input v-model="value.direccion"  name="direccion"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Email">
      <b-form-input v-model="value.email" name="email"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Ciudad">
      <b-form-input v-model="value.ciudad" name="ciudad"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Estadocivil">
      <b-form-select v-model="value.estadocivil" name="estadocivil" :options="getoptionEstadoCivil" />
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Instruccion">
      <b-form-select v-model="value.instruccion" name="instruccion" :options="getoptionInstruccion" />
    </b-input-group>
     <b-input-group prepend="Ocupación" class="inputgroup" >
      <b-form-input  v-model="value.ocupacion" name="ocupacion"></b-form-input>
     </b-input-group>


       <b-button @click="addPatienteEvent(value)">Añadir Paciente</b-button>
  </b-container>

</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "altapaciente",
  components: {
  },
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      value: {
        historiaclinica:"",
        nombre:"",
        apellidos:"",
        dateage:"",
        telefono: "",
        direccion: "",
        email: "",
        ciudad: "",
        estadocivil: "",
        instruccion: "",
        ocupacion: "",
        genero:""
      },
      selected: "null",


    };
  },
  computed: {
    ...mapGetters({
      getoptionEstadoCivil: "getoptionEstadoCivil",
      getoptionInstruccion:"getoptionInstruccion",
      getoptionGenero:"getoptionGenero"
    })
  },
  methods: {
    ...mapActions({
      //addNewPatientBBDD: "addNewPatientBBDD"
    }),
    ...mapMutations({
      addPatiente: "addPatiente"
    }),
    addPatienteEvent : function(value){

      // let pacHC = (
      //   value.apellidos.toLowerCase().trim().replace(/\//g,"").substr(0, 3) +
      //   value.nombre.toLowerCase().trim().replace(/\//g,"").substr(0, 3) +
      //   value.ciudad.toLowerCase().trim().replace(/\//g,"").substr(0, 2) +
      //   value.dateage.toLowerCase().trim().replace(/\//g,"")
      // )

      // value.historiaclinica = pacHC;

      this.addPatiente(value);
      this.addNewPatientBBDD();
    },
    addNewPatientBBDD: function(){


        this.$store.dispatch("addNewPatientBBDD").then(response => {

            this.value= {
              nombre:"",
              apellidos:"",
              dateage:"",
              telefono: "",
              direccion: "",
              email: "",
              ciudad: "",
              estadocivil: "",
              instruccion: "",
              ocupacion: "",
              genero:""
            }

        }, error => {
            console.error("se fue a la mierda")
        })

    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope >
.input-group-text {
  width: 130px !important;
}


.editing {
  background-color: aliceblue;
}

.notediting {
  background-color: #fff;
}
</style>


