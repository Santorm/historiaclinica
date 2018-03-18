<template>

  <b-container fluid>
<!-- TODO:VER BOYONES Y COMO ACTUALIZAR LA INFI -->
    <b-input-group


          class="inputgroup"
          prepend="Nombre">
          <b-form-input
            :disabled="getbtneditSaveState.disabled"
            :cancelsave="getbtneditSaveState.cancelsave"
            v-model="value.nombre"
            name="nombre" >
          </b-form-input>
          <!-- <b-input-group-append>
             <btns-editsave></btns-editsave>
          </b-input-group-append> -->
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Apellidos">
          <b-form-input
            :disabled="getbtneditSaveState.disabled"
            :cancelsave="getbtneditSaveState.cancelsave"
            v-model="value.apellidos"
            name="apellidos" >
          </b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Nacimiento">
          <b-form-input
          v-model="value.dateage"
          :disabled="getbtneditSaveState.disabled"
          :cancelsave="getbtneditSaveState.cancelsave"

          ></b-form-input>
    </b-input-group>
   <b-input-group class="inputgroup" prepend="Género">
      <b-form-select
      placeholder="genero"
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.genero"
      name="genero"
      :options="getoptionGenero" />
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Teléfono">
      <b-form-input
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.telefono"
      name="telefono"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Dirección">
      <b-form-input
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.direccion"
      name="direccion"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Email">
      <b-form-input
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.email"
      name="email"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Ciudad">
      <b-form-input
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.ciudad"
      name="ciudad"></b-form-input>
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Estadocivil">
      <b-form-select
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.estadocivil"
      name="estadocivil"
      :options="getoptionEstadoCivil" />
    </b-input-group>
    <b-input-group class="inputgroup" prepend="Instruccion">
      <b-form-select
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.instruccion"
      name="instruccion"
      :options="getoptionInstruccion" />
    </b-input-group>
     <b-input-group prepend="Ocupación" class="inputgroup" >
      <b-form-input
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"
      v-model="value.ocupacion"
      name="ocupacion"></b-form-input>
     </b-input-group>

    <btns-editsave modulename="datospersonales"></btns-editsave>


  </b-container>

</template>

<script>
import btnsEditsave from "./commons/BtnsEditsave";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "datospersonales",
  components: {
    btnsEditsave
  },
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      initialvalue: {},
      value: {},
      selected: "null",
      btnState: "cancel"
    };
  },
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected",
      getbtneditSaveState: "getbtneditSaveState",
      getoptionEstadoCivil: "getoptionEstadoCivil",
      getoptionInstruccion: "getoptionInstruccion",
      getoptionGenero: "getoptionGenero",
      getDatosPersonales: "getDatosPersonales"
    })
  },
  methods: {
    ...mapActions({
      fetchDatosModulo: "fetchDatosModulo"
    }),
    ...mapMutations({
      addPatiente: "addPatiente",
      btneditSaveState: "btneditSaveState",
      editfields: "editfields"
    }),
    changevalues: function() {
      // console.log("calcelsave", this.getbtneditSaveState.cancelsave);
      // if (this.getbtneditSaveState.cancelsave == "cancel") {
      //   // this.fetchDatosModulo("datospersonales");
      //   // this.value = this.getDatosPersonales;
      //   return Object.assign(this.value, this.initialvalue);
      // } else if (this.getbtneditSaveState.cancelsave == "edit") {
      // }
      // else if (this.getbtneditSaveState.cancelsave == "save") {
      //   console.log("se guardará");
      // }
    }
  },
  created: function() {
    console.log("created");
    //paso por parametro el nombre del modulo para hacer la consulta
    this.fetchDatosModulo("datospersonales");
    this.initialvalue = Object.assign({}, this.getDatosPersonales);
    this.value = this.getDatosPersonales;
  },
  beforeUpdate: function() {
    //este before update deberia lanzarse solo alpalstar cancel
    // this.changevalues();
    this.btnState = this.getbtneditSaveState.cancelsave;
  },
  watch: {
    btnState: function(val) {
      console.log("el valor", val);
      if (val == "cancel") {
        this.fetchDatosModulo("datospersonales");
        this.value = this.getDatosPersonales;
//        return Object.assign(this.value, this.initialvalue);
      }
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


