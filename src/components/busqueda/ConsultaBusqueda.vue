<template>
<div class="panelconsulta">
  <b-input-group prepend="Buscar">
    <b-form-input v-on:input="ifshowtable" v-model="filter" placeholder="Introduzca un dato del paciente" ></b-form-input>
        <b-input-group-append>
          <b-btn v-if="filter" @click="filter = ''" variant="outline-success">Borrar</b-btn>
        </b-input-group-append>
  </b-input-group>

  <b-table 
  v-if="showtable"
  striped hover responsive
  :items="pacientes" 
  :fields="fields"
  :filter="filter"
  >

    <template slot="select" slot-scope="data">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button @click="selectPaciente(data.item)">
          <i class="material-icons">done</i>
      </b-button>
 
    </template>
  
  
  </b-table>
</div>

</template>

<script>
import { EventBus } from "../../commons/event-bus";


export default {
  data () {
    return {
      fields: [
        'select',
        {
          key: 'apellidos',
          sortable: true,
        },
        {
          key: 'nombre',
          label: 'Person age',
          sortable: true,
          },
          {
          key: 'dateage',
          label: 'Nació',
          sortable: true,
          },
          {
          key: 'telefono',
          label: 'Tlf',
          sortable: false,
          },
          {
          key: 'ciudad',
          sortable: true,
          },
          {
          key: 'email',
          label: 'E-mail',
          sortable: false,
          },{
          key: 'historiaclinica',
          label: '#HC',
          sortable: true,
          } 
      ],
      filter: null,
      showtable: false,
      pacientes:[],
      urlSessionPat: "/static/api/actualpatient.php",
      urlConsulta : "/static/api/consultapacientes.php"
    }
  },
  mounted: function() {
    this.consulta();
  },
  methods: {
    consulta: function() {
        this.$http.post(this.urlConsulta).then(
        function(response) {
          for (var pacientes in response.data) {
            this.pacientes.push(response.data[pacientes]);
          }
    },
        response => {
          // error callback
          console.log("Ha fallado la consulta");
        }
      );
    },
    ifshowtable: function() {
      if (this.filter != "") {
        this.showtable = true;
      } else {
        this.showtable = false;
      }
    },
    selectPaciente: function(row) {

      console.log("funcionoooo", row);
      EventBus.$emit("paciente", {
        id_paciente_busqueda: row.id_persona,
        nombre_busqueda: row.nombre,
        apellidos_busqueda: row.apellidos,
        nacimiento: row.dateage,
        ciudad: row.ciudad,
        historiaclinica_busqueda: row.historiaclinica
      });
      //send data actual patient for session var identification in server

      this.$http.post(this.urlSessionPat, row).then(
        function(response) {
          console.log("ok", response);
        },
        response => {
          // error callback
          console.log("error", response);
        }
      );
    }
  }
}
</script>