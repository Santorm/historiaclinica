<template>

  <b-container fluid>

      <b-row>
        <b-col cols="8">
          <inputs-datos prepend="Nombre" :id="getpatientSelected.id_persona" name="nombre" />
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientSelected.historiaclinica}}</b-badge>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <inputs-datos   prepend="Nacimiento" :id="getpatientSelected.id_persona" name="dateage"/>
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientOld}}</b-badge>
        </b-col>
      </b-row>

      <inputs-datos  prepend="Teléfono" :id="getpatientSelected.id_persona" name="telefono"/>
      <inputs-datos  prepend="Email" :id="getpatientSelected.id_persona" name="email"/>
      <inputs-datos  prepend="Ciudad" :id="getpatientSelected.id_persona" name="ciudad"/>

      <select-datos  :options="getoptionEstadoCivil" ></select-datos>
      <select-datos  :options="getoptionEstadoCivil" ></select-datos>


       <btns-editsave></btns-editsave>

    <pre>{{getpatientSelected}}</pre>
  </b-container>

</template>

<script>
import btnsEditsave from "./commons/BtnsEditsave";
import inputsDatos from "./datospersonales/inputsDatos";
import selectDatos from "./datospersonales/selectDatos";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "datospersonales",
  components: {
    inputsDatos,
    selectDatos,
    btnsEditsave
  },
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      datavalue: "",
      selected: "null",

    };
  },
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected",
      getpatientOld: "getpatientOld",
      getoptionEstadoCivil: "getoptionEstadoCivil"
    }),
    inputDisabled: function() {
      return true;
    }
  },
  methods: {

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


