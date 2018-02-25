<template>

  <b-container fluid>

      <b-row>
        <b-col cols="8">
          <inputs-datos :disabled="disabled" prepend="Nombre" :id="getpatientSelected.id_persona" name="nombre" />
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientSelected.historiaclinica}}</b-badge>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <inputs-datos :disabled="disabled" prepend="Nacimiento" :id="getpatientSelected.id_persona" name="dateage"/>
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientOld}}</b-badge>
        </b-col>
      </b-row>

      <inputs-datos :disabled="disabled" prepend="Teléfono" :id="getpatientSelected.id_persona" name="telefono"/>
      <inputs-datos :disabled="disabled" prepend="Email" :id="getpatientSelected.id_persona" name="email"/>
      <inputs-datos :disabled="disabled" prepend="Ciudad" :id="getpatientSelected.id_persona" name="ciudad"/>

      <select-datos :disabled="disabled" :options="getoptionEstadoCivil" ></select-datos>
      <select-datos :disabled="disabled" :options="getoptionEstadoCivil" ></select-datos>


      <b-button @click="editfields">{{btnInfo}}</b-button>
      <b-button @click="saveChanges" v-if="this.btnInfo == 'Cancelar'">Guardar</b-button>


    <pre>{{getpatientSelected}}</pre>
  </b-container>

</template>

<script>
import inputsDatos from "./datospersonales/inputsDatos";
import selectDatos from "./datospersonales/selectDatos";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "datospersonales",
  components: {
    inputsDatos,
    selectDatos
  },
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      datavalue: "",
      disabled: true,
      selected: "null",
      btnInfo: "Editar"
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
    ...mapActions({
      saveChanges: "saveChanges"
    }),
    editfields: function() {
        this.disabled = !this.disabled;
        if(this.disabled){
          this.btnInfo = "Editar";
        }else{
          this.btnInfo = "Cancelar";
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


