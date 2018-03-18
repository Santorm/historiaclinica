<template>
<div class="panelconsulta">
  <b-input-group prepend="Buscar">
    <b-form-input v-on:focus.once.native="consulta" v-on:input="ifshowtable" v-model="filter" placeholder="Introduzca un dato del paciente" ></b-form-input>
        <b-input-group-append>
          <b-btn v-if="filter" @click="filter = ''" variant="outline-success">Borrar</b-btn>
        </b-input-group-append>
  </b-input-group>
  <!-- <b-button @click="consulta"></b-button> -->

  <b-table
  v-if="showtable"
  striped hover responsive
  :items="getpatientFetched"
  :fields="fields"
  :filter="filter"
  >
    <template slot="select" slot-scope="data">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button id="btn-done" @click="selectPatient(data.item)">
          <i  class="material-icons">done</i>
      </b-button>
    </template>
  </b-table>
  <!-- <pre>{{$data}}</pre> -->
</div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: [
        "select",
        {
          key: "apellidos",
          sortable: true
        },
        {
          key: "nombre",
          label: "Person age",
          sortable: true
        },
        {
          key: "dateage",
          label: "Nació",
          sortable: true
        },
        {
          key: "telefono",
          label: "Tlf",
          sortable: false
        },
        {
          key: "ciudad",
          sortable: true
        },
        {
          key: "email",
          label: "E-mail",
          sortable: false
        },
        {
          key: "hc",
          label: "#HC",
          sortable: true
        }
      ],
      filter: null,
      showtable: false,
      pacientes: [],
      //urlConsulta: "/static/api/consultapacientes.php"
    };
  },
  computed: {
    ...mapGetters({
      getpatientFetched: "getpatientFetched"
    }),
  },
  methods: {
    selectPatient: function(row) {
      return (this.$store.state.patientSelected = row);
    },
    ...mapActions({
      consulta: "consulta"
    }),
    ifshowtable: function() {
      if (this.filter != "" && this.filter != null) {
        this.showtable = true;
      } else {
        this.showtable = false;
      }
    }
  }
};
</script>
<style scoped>
#btn-done {
  background-color: #928057;
}
</style>
