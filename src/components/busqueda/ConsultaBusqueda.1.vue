<template>
  <div class="container">
    <div class="panelconsulta">

     
  <b-input-group prepend="Buscar">
    <b-form-input type="text" v-on:input="showtable" v-model="inputbusqueda" placeholder="Introduzca un dato del paciente" ></b-form-input>
        <b-input-group-append>
        <b-btn variant="outline-success">Button</b-btn>
        <b-btn variant="info">Button</b-btn>
        </b-input-group-append>
  </b-input-group>

   <b-table striped hover v-if="mostrartabla" :items="resultadoPacientes" :fields="fields"></b-table>


<!-- ///////////////ANTIGUOOOO//// -->

      <!-- <div>
        <md-layout class="searchinput_box">
          <md-input-container class='md-flex-100'>

            <span id='searchtitle'>Buscar:</span><input class='inputsearch' v-on:keyup.prevent='showtable' v-model='inputbusqueda' placeholder='Introduzca un dato del paciente'>

          </md-input-container>
        </md-layout>

        <md-table-card class='md-flex-100 searchtable' v-if='mostrartabla'>
           <md-table md-sort="apellidos" class='md-flex-100'>
            <md-table-header>
              <md-table-row>
                <md-table-head></md-table-head>
                <md-table-head></md-table-head>
                <md-table-head md-sort-by="apellidos">Apellidos</md-table-head>
                <md-table-head md-sort-by="nombre">Nombre</md-table-head>
                <md-table-head md-sort-by="nombre">Nacimiento</md-table-head>
                <md-table-head md-sort-by="telefono">Teléfono</md-table-head>
                <md-table-head md-sort-by="ciudad">Ciudad</md-table-head>
                <md-table-head md-sort-by="email">email</md-table-head>
                <md-table-head md-sort-by="historiaclinica">
                  <md-icon>message</md-icon>
                  <span>N# Historia</span>
                </md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>

              <md-table-row  v-if="busquedacaracter(row)" v-for="(row, rowIndex) in pacientes" :key="rowIndex" :md-item="row">
                 <span @click="selectPaciente(row)"> Selec </span>
                <md-table-cell  v-for="(column, columnIndex) in row" :key="columnIndex">

                <span  v-if="column != row.id_persona">{{ column }}</span>
                
                </md-table-cell>
              </md-table-row>

            </md-table-body>
         

          </md-table>

        </md-table-card>
       
      </div> -->

   <!-- ///////HASTA AQUI ANTIGUO////    -->

   <pre>{{$data}}</pre>

    </div>

  
    
  </div>
</template>

<script>
import { EventBus } from "../../commons/event-bus";
export default {
  name: "consultaBusqueda",
  data() {
    return {
      inputbusqueda: [],
      claves: [],
      mostrartabla: false,
      urlConsulta: "/static/api/consultapacientes.php",
      pacientes: [],
      resultadoPacientes: [],
      fields: ['Apellido', 'Nombre', 'Nacimiento', 'Telef', 'Ciudad', 'E-mail', '#HC'],
      urlSessionPat: "/static/api/actualpatient.php"
    };
  },
  created: function() {
    this.consulta();
  },
  methods: {
    consulta: function() {
      // alert('sirve')
      // GET /someUrl

      this.$http.post(this.urlConsulta).then(
        function(response) {
          for (var pacientes in response.data) {
            this.pacientes.push(response.data[pacientes]);
          }

          // this.mostrartabla = true;
        },
        response => {
          // error callback
          console.log("mal", response);
        }
      );
    },
    showtable: function() {
      if (this.inputbusqueda != "") {
        this.busquedacaracter(this.pacientes);
        this.mostrartabla = true;

      } else {
        this.mostrartabla = false;
      }

      // this.consulta();
      // this.claves=Object.keys(this.pacientes[0]);
      // for(var i=0 ; i<5 ; i++){
      //    )[i];
      //   arrayclaves.push(claves);
      // }
      // console.log(claves);
      //los cambios
    },
    busquedacaracter: function(row) {
      //  console.log("row", row)
      //conforme voy escribiendo la longitud cambia y van formandose todos los elementos del array... asi puede encontrar cualquiera de los elementos. pero si se quiere ver el otro, depende de cuanto cambio lalongitud ya pudo cambiar el valor

      console.log(row[0]["apellidos"]);

      var inputbusquedaarray = this.inputbusqueda
        .toLowerCase()
        .trim()
        .split(" ");

      // return false;
      // var longitudultimo =[];
      var longitudultimo = inputbusquedaarray.length;
      var longitud = inputbusquedaarray[longitudultimo - 1].length;

      ////////////////////////////////pop

      // console.log(inputbusquedaarray, 'long', longitudultimo, longitud);

      var apellido = row["apellidos"].toLowerCase();
      var nombre = row["nombre"].toLowerCase();
      var nacimiento = row["dateage"].toLowerCase();
      var ciudad = row["ciudad"].toLowerCase();
      var email = row["email"].toLowerCase();
      var historiaclinica = String(row["id_persona"]).toLowerCase();

      var sapellido = row["apellidos"].substr(0, longitud).toLowerCase();
      var snombre = row["nombre"].substr(0, longitud).toLowerCase();
      var sciudad = row["ciudad"].substr(0, longitud).toLowerCase();
      var semail = row["email"].substr(0, longitud).toLowerCase();
      var shistoriaclinica = String(row["id_persona"])
        .substr(0, longitud)
        .toLowerCase();

      var arrayrow = [];
      arrayrow.push(
        apellido,
        nombre,
        nacimiento,
        ciudad,
        email,
        historiaclinica
      );
      ///LO QUE EMPIEZA CON LA S ES PARA HACER LOS DOS SISTEMAS A LA VEZ
      var sarrayrow = [];
      sarrayrow.push(sapellido, snombre, sciudad, semail, shistoriaclinica);
      // console.log('arrayrow', arrayrow);
      // console.log('inputbusqueda', inputbusquedaarray)
      // var inputbusquedalow = this.inputbusqueda.toLowerCase().trim();

      // console.log(apellido, inputbusquedaarray.includes(apellido) || inputbusquedaarray.includes(nombre))

      // return false;

      //  var aggg='';
      var conteo = 0;
      for (var i = 0; i < inputbusquedaarray.length; i++) {
        // var agg= arrayrow.indexOf(inputbusquedaarray[i]);

        var aggg = arrayrow.includes(inputbusquedaarray[i]);
        var saggg = sarrayrow.includes(
          inputbusquedaarray[i].substr(0, longitud)
        );
        if (aggg) {
          conteo++;
        }
        // console.log(aggg, conteo, longitud, saggg);
      }

      if ((aggg && conteo == inputbusquedaarray.length) || saggg) {
        return true;
      } else {
        return false;
      }
    },
    selectPaciente: function(row) {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panelcontrol {
  margin: 20px auto;
  width: 100%;
  min-width: 200px;
  /* border: 1px solid grey; */
  border-radius: 5px;
  padding: 20px 100px;
  height: fit-content;
  /* background-color: rgba(128, 128, 128, 0.14); */
}

.inputsearch {
  font-size: 16px;
}

.searchinput_box {
  position: relative;
}

.searchtable {
  max-height: 380px;
}

#searchtitle {
  line-height: 30px;
  padding-right: 20px;
  font-size: 20px;
}
</style>
