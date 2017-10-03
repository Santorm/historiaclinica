<template>
  <div>
    <div class="carrousel_position">
      <div class="carrousel_box">
        <div class="picture_box" v-for="(pic, index) in dataphoto" :key="pic.id_foto" :style="{backgroundImage: 'url(/static/api/'+pic.ruta+')', width: 150 * pic.width / pic.height + 'px'}">
        </div>

      </div>
    </div>
    <div class="slider">

      <!-- <input v-model = "valueslide" @change = "funconinput" type="range" min="1" max="100"  class="slider" id="myRange"> -->

      <div class="slider_move" id="myRange" draggable="true" @mousedown="funconinput"></div>
    </div>
    <!-- <button @click = "goright">Derecha</button> -->
    <!-- <button>Izqui</button> -->

    <pre>{{$data}}</pre>
  </div>
</template>

<script>
//import { EventBus } from '../../commons/event-bus'
export default {
  name: 'carrousel',
  components: {
  },
  data() {
    return {
      // pacienteActivo: {},
      valueslide: 0,
      urlQueryPhotos: '/static/api/queryphotos.php',
      // picwidth:[
      // ],
      dataphoto: []
      // pictures: []
    }
  },
  methods: {
    // goright: function(){
    //   console.log("derecha");
    // },

    funconinput: function() {
      var valslide = document.getElementById("myRange");
      //  = valslide;
      var csswidthtumb = window.getComputedStyle(valslide, '::-webkit-slider-thumb').getPropertyValue("width");
      // .slider::-webkit-slider-thumb
      // console.log("oninputeando", this.valueslide, csswidthtumb);
    },

    queryPhotos: function() {
      this.$http.post(this.urlQueryPhotos).then(function(response) {
        //  console.log("consulta fotos bien", response.data[0].ruta)

        for (var item in response.data) {

          this.dataphoto.push(response.data[item]);
        }

        this.getPictureData()

        // this.mostrartabla = true;


      }, response => {
        // error callback
        console.log('mal', response);
      });

    },

    // eventBus: function() {
    //   var self = this
    //   // console.log("se creo event buss de carrousel")
    //   EventBus.$on('paciente', function(row) {
    //     console.log("cccont row", row)
    //     // self.pacienteActivo = {}
    //     self.pacienteActivo = row
    //   })
    // },

    getPictureData: function() {
      var self = this;
      var foto = [];
       for (var i = 0; i < this.dataphoto.length; i++) {
        //  console.log("self antes", self)
        
        foto = new Image();
        foto.src = "/static/api/" + this.dataphoto[i].ruta;

       foto.onload = (function(nr){
        //  console.log("self dentro", self)
        var photoWidth = foto.width;
        var photoHeight = foto.height;
          return function (){
            // console.log("self mas adentro", self)
            console.log(nr, foto.width, photoWidth, photoHeight)
            console.log(self.dataphoto)
              self.dataphoto[nr]["width"] = photoWidth ;
              self.dataphoto[nr]["height"] = photoHeight;
          }
        
       })(i);

       var loadedPhoto = foto.onload;
       loadedPhoto();
      }

      // TODO: No se carga las imagenes, hay que vlver a crgar para que aparezcan 
      
  
      
  },
   getPhotoSize: function(foto, nr) {
     console.log("fotoengetphotosize", foto, foto.width, foto.height);
     this.dataphoto[nr]["width"] = foto.width;
   }
  },  
  created: function() {
    //this.eventBus()
    this.queryPhotos()
    // this.getPhotoSize()
     
  }
  // beforeMount: function(){ 
  //   //this.eventBus()
  //   this.getPictureData()    
  // }

}
</script>
<style scoped>
.picture_box {
  /* width: 200px; */
  height: 150px;
  /* border: 1px solid blue; */
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}

.carrousel_box {
  position: absolute;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  height: 150px;
  border-radius: 5px;
  /* border: 1px solid red; */
}

.carrousel_position {
  position: relative;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  height: 150px;
  border-radius: 5px;
}






/* slider */

.slider {
  -webkit-appearance: none;
  width: 80%;
  margin: 0 auto;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider_move {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>