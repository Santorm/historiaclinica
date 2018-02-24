<template>

  <b-container fluid>

      <b-row>
        <b-col cols="8">
          <inputs-datos prepend="Nombre" :datavalue="getpatientSelected.nombre+' '+getpatientSelected.apellidos"/>
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientSelected.historiaclinica}}</b-badge>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <inputs-datos prepend="Nacimiento" :datavalue="getpatientSelected.dateage"/>
        </b-col>
        <b-col>
          <b-badge variant="info">{{getpatientOld}}</b-badge>
        </b-col>
      </b-row>

      <inputs-datos prepend="Teléf" :datavalue="getpatientSelected.telefono"/>
      <inputs-datos prepend="Email" :datavalue="getpatientSelected.email"/>
      <inputs-datos prepend="Ciudad" :datavalue="getpatientSelected.ciudad"/>

      <b-form-select v-model="selected" :options="options" class="mb-3" />

    <pre>{{getpatientSelected}}</pre>
  </b-container>

</template>

<script>
import inputsDatos from "./datospersonales/inputsDatos";
import { mapGetters } from "vuex";
export default {
  name: "datospersonales",
  components: {
    inputsDatos
  },
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      datavalue: ""
    };
  },
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected",
      getpatientOld: "getpatientOld"
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
<style scoped>
.inputgroup {
  margin-bottom: 10px;
}

.editing {
  background-color: aliceblue;
}

.notediting {
  background-color: #fff;
}
</style>
