<template>
  <div class="container">
    <div class="panelconsulta">
      <div>

        <!-- <form class='md-flex-100' @submit.stop.prevent="submit"> -->
        <md-layout class="searchinput_box">
          <h2>Búsqueda de Pacientes:</h2>
          <md-input-container class='md-flex-100'>

            <!-- <label>Buscar</label> -->
            <input class='inputsearch' v-on:keyup.prevent='showtable' v-model='inputbusqueda' placeholder='Buscar'></input>
            <!-- <span class="md-error">No se han encontrado resultados</span> -->
          </md-input-container>
        </md-layout>
        <!-- <md-button @click.prevent='busqueda' class='btn_primario md-primary md-raised'>Buscar</md-button> -->
        <!-- <md-button @click.prevent='consulta' class='btn_primario md-primary md-raised'>Ver todos</md-button> -->
        <!-- </form> -->

        <!-- //////tabla/// -->
        <!-- <md-layout>  -->
        <md-table-card class='md-flex-100' v-if='mostrartabla'>
          <md-toolbar>
            <h1 class="md-title">Resultados:</h1>
            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>
          </md-toolbar>
          <md-table-alternate-header md-selected-label="selected">
            <md-button class="md-icon-button">
              <md-icon>delete</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </md-table-alternate-header>

          <md-table md-sort="apellidos">
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="apellidos">Apellidos</md-table-head>
                <md-table-head md-sort-by="nombre">Nombre</md-table-head>
                <md-table-head md-sort-by="ciudad">Ciudad</md-table-head>
                <md-table-head md-sort-by="email">email</md-table-head>
                <md-table-head md-sort-by="historiaclinica">
                  <md-icon>message</md-icon>
                  <span>N# Historia</span>
                </md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>

              <!-- Este funciono
                      <md-table-row v-if="inputbusqueda === row.apellidos" v-for="(row, rowIndex) in pacientes" :key="rowIndex" :md-item="row" md-selection> -->

              <md-table-row v-if="busquedacaracter(row)" v-for="(row, rowIndex) in pacientes" :key="rowIndex" :md-item="row" md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  <!-- <span v-if="columnIndex === 'email'">{{ column }}</span>  -->

                  <!-- <md-button class="md-icon-button" v-if="columnIndex === 'email'">
                      <md-icon>edit</md-icon>
                    </md-button> -->

                  <!-- <md-select
                      placeholder="ciudad"
                      :name="'ciudad' + columnIndex"
                      :id="'ciudad' + columnIndex"
                      v-model="pacientes[rowIndex].ciudad"
                      v-if="columnIndex === 'ciudad'">
                      <md-option value="Quito">Quito</md-option>
                      <md-option value="Ambato">Ambato</md-option>
                      <md-option value="Otra">Otra</md-option>
                    </md-select> -->
                  <!-- <span>{{column}}</span>  -->
                  <span>{{ column }}</span>
                  <!-- <span v-if="inputbusqueda == 'apellidos'">{{ column }}{{apellidos}}</span>  -->
                </md-table-cell>
              </md-table-row>

            </md-table-body>
            <!-- <span v-if="busquedacaracter()">No existen resultados para la búsqueda</span> -->

          </md-table>
        </md-table-card>
        <!-- </md-layout> -->
        <!-- //fin tabla//// -->
      </div>

    </div>
    <!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'panelconsulta',
  data() {
    return {
      inputbusqueda: [],
      claves: [],
      mostrartabla: false,
      urlConsulta: '/static/api/consultapacientes.php',
      pacientes: [],
    }
  },
  created: function () {
    this.consulta();
  },
  methods: {
    consulta: function () {
      // alert('sirve')
      // GET /someUrl

      this.$http.post(this.urlConsulta).then(function (response) {

        for (var pacientes in response.data) {

          this.pacientes.push(response.data[pacientes]);
        }

        // this.mostrartabla = true;


      }, response => {
        // error callback
        console.log('mal', response);
      });

    },
    showtable: function () {
      // console.log("siii";
      if (this.inputbusqueda != '') {
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
    busquedacaracter: function (row) {

      //conforme voy escribiendo la longitud cambia y van formandose todos los elementos del array... asi puede encontrar cualquiera de los elementos. pero si se quiere ver el otro, depende de cuanto cambio lalongitud ya pudo cambiar el valor



      var inputbusquedaarray = this.inputbusqueda.toLowerCase().trim().split(" ");

      // return false;
      // var longitudultimo =[];
      var longitudultimo = inputbusquedaarray.length;
      var longitud = inputbusquedaarray[longitudultimo - 1].length;

      ////////////////////////////////pop

      // console.log(inputbusquedaarray, 'long', longitudultimo, longitud);

      var apellido = row['apellidos'].toLowerCase();
      var nombre = row['nombre'].toLowerCase();
      var ciudad = row['ciudad'].toLowerCase();
      var email = row['email'].toLowerCase();
      var historiaclinica = String(row['historiaclinica']).toLowerCase();

      var sapellido = row['apellidos'].substr(0, longitud).toLowerCase();
      var snombre = row['nombre'].substr(0, longitud).toLowerCase();
      var sciudad = row['ciudad'].substr(0, longitud).toLowerCase();
      var semail = row['email'].substr(0, longitud).toLowerCase();
      var shistoriaclinica = String(row['historiaclinica']).substr(0, longitud).toLowerCase();

      var arrayrow = [];
      arrayrow.push(apellido, nombre, ciudad, email, historiaclinica);

      ///LO QUE EMPIEZA CON LA S ES PARA HACER LOS DOS SISTEMAS A LA VEZ
      var sarrayrow = [];
      sarrayrow.push(sapellido, snombre, sciudad, semail, shistoriaclinica);
      console.log('arrayrow', arrayrow);
      console.log('inputbusqueda', inputbusquedaarray)
      // var inputbusquedalow = this.inputbusqueda.toLowerCase().trim();

      // console.log(apellido, inputbusquedaarray.includes(apellido) || inputbusquedaarray.includes(nombre))

      // return false; 

      //  var aggg='';
      var conteo = 0;
      for (var i = 0; i < inputbusquedaarray.length; i++) {
        // var agg= arrayrow.indexOf(inputbusquedaarray[i]);   

        var aggg = arrayrow.includes(inputbusquedaarray[i]);
        var saggg = sarrayrow.includes(inputbusquedaarray[i].substr(0, longitud));
        if (aggg) {
          conteo++
        }
        console.log(aggg, conteo, longitud, saggg);
      }


      if (aggg && conteo == inputbusquedaarray.length || saggg) {


        return true;
      } else {
        return false;
      }


      // }




      // for (var i = 0; i < inputbusquedaarray.length; i++) {
      //   for (var j = 0; j < arrayrow.length; j++) {
      //     if (arrayrow[j] == inputbusquedaarray[i]){


      //       console.log("verdadero")
      //       return true;
      //     }else{
      //       console.log("falso")
      //       return false;
      //     }

      //   }
      // }





      // if (inputbusquedaarray.includes(arrayrow)) {
      //   return true;
      // } else {
      //   return false;
      // }

      // /////////////
      //       // (this.inputbusqueda == apellido || this.inputbusqueda == nombre  || this.inputbusqueda == email || this.inputbusqueda == historiaclinica)
      //       if (inputbusquedalow == apellido || inputbusquedalow == nombre || inputbusquedalow == ciudad || inputbusquedalow == email || inputbusquedalow == historiaclinica) {
      //         // this.mostrartabla = true;
      //         return true;
      //       } else {
      //         // this.mostrartabla = false;
      //         return false;
      //       }

      // /////

      ///////////////////


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container {
  background-color: aliceblue;
} */

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

.searchinput_box{
  position: relative;
}
</style>
