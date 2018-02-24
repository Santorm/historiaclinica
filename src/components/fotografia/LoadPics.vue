<template>
  <div>
    <p>Componente loadFiles</p>
    <form action="" enctype=" multipart/form-data">
      <input type="file" id="files" @change="loadfotos" multiple="multiple" />
      <!-- <output id="list"></output> -->
    </form>
    <!-- <p>{{this.pacienteActivo.id_paciente_busqueda}}</p> -->
    <!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'loadPics',
  components: {
  },
  props: [
    'pacienteActivo'
  ],
  data() {
    return {
      urlaltaDatosFotos: '/static/api/altadatafotos.php',
      urlSendFotos: '/static/api/uploadfotos.php',
      dataPictures: {},
      // pacienteActivo: this.pacienteActivo

    }
  },
  methods: {

    eventBus: function() {
      var self = this
      // console.log("se cretBuseo ev")
      EventBus.$on('paciente', function(row) {
        // console.log("cont row", row)
        // self.pacienteActivo = {}
        self.pacienteActivo = row
      })
    },

    loadfotos: function(evt) {
    // TODO: ver como cambiar tamaño de archivo antes de enviar para evitar archivos muy pesados... 
      var archivos = document.getElementById("files");//Creamos un objeto con el elemento que contiene los archivos: el campo input file, que tiene el id = 'archivos'
      var archivo = archivos.files; //Obtenemos los archivos seleccionados en el imput
      // console.log("arch", archivo)
      //Creamos una instancia del Objeto FormDara.
      var archivos = new FormData();
      /* Como son multiples archivos creamos un ciclo for que recorra la el arreglo de los archivos seleccionados en el input
      Este y añadimos cada elemento al formulario FormData en forma de arreglo, utilizando la variable i (autoincremental) como 
      indice para cada archivo, si no hacemos esto, los valores del arreglo se sobre escriben*/
     
     
     // for (var i = 0; i < archivo.length; i++) {
      //   archivo[i]["id_paciente"] = this.pacienteActivo.id_paciente_busqueda;
         
      //   // archivos.append('archivo' + i, this.pacienteActivo.id_paciente_busqueda);
      // }
      
      for (var i = 0; i < archivo.length; i++) {
        archivos.append('archivo' + i, archivo[i]); //Añadimos cada archivo a el arreglo con un indice direfente
        // archivos.append('archivo' + i, "probandoando");
             }
        // archivos.append("id_paciente", this.pacienteActivo.id_paciente_busqueda);
        //  console.log("archivo", archivo)
      // console.log("archivos", archivos)
      // console.log("paciente activo", this.pacienteActivo.id_paciente_busqueda)
            // archivos.append("id_paciente_activo", this.pacienteActivo.id_paciente_busqueda)
      // console.log("archivos", archivos)

      // console.log("archivoo", archivo);

      this.$http.post(this.urlSendFotos, archivos).then(function(response) {
        console.log("biennn", response)

        this.dataPictures = response.data;
        for (var pic in this.dataPictures) {
          //   console.log("pic",pic.ruta)
          this.dataPictures[pic]['id_paciente'] = this.pacienteActivo.id_paciente_busqueda;

          // for(var pica in this.dataPictures){
          // pic.id_paciente = this.pacienteActivo.id_paciente_busqueda;
          // }

        }

        // this.dataPictures.id_paciente = this.pacienteActivo.id_paciente_busqueda;

        this.altaDatosFotos()

      }, function(response) {

        // error callback
        console.log("mal", response)
        // this.$els.loading.innerHTML = '<img class="ajax-loader" height="40px" width="40px" src="img/error_icon.jpeg" />';
      });

    },
    //SE REALIZA EL ALTA DE LA INFORMACIÓN DE LA FOTOGRAFIAS SUBIDAS HACIA LA BASE DE DATOS 
    altaDatosFotos: function() {
      // alert('sirve')
      // GET /someUrl
      if(this.dataPictures != ''){
      console.log("datapictures", this.dataPictures);
      this.$http.post(this.urlaltaDatosFotos, this.dataPictures).then(function(response) {

        console.log(response);


      }, response => {
        // error callback
        console.log('mal', response);
      });

    }else{
      return false;
    }
    },

  },
  created() {
    this.eventBus()

  }
}
</script>
<style scoped>

</style>