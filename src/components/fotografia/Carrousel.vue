<template>
  <div>
    <div class="carrousel_position">
      <div class="carrousel_box" :style="{left : 360-sliderPositionX + 'px', width : totalCarrouselWidth + 'px' }">
        <div class="picture_box" v-for="(pic, index) in dataphoto" :key="pic.id_foto" :style="{backgroundImage: 'url(/static/api/'+pic.ruta+')', width: 150 * pic.width / pic.height + 'px'}">
        </div>

      </div>
    </div>
    <div class="slider" id="sliderbox" :style = "{width : sliderWidth}" @mousedown="eventMouseDown" @mouseup="eventMouseUp" @mousemove="eventMouseMove" @mouseout="eventMouseOut, false">

      <!-- <input v-model = "valueslide" @change = "funconinput" type="range" min="1" max="100"  class="slider" id="myRange"> -->

      <div class="slider_move" id="myRange" :style ="{left : sliderPositionX + 'px', width : sliderWidth + 'px' }"></div>
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
      mouseDownEventOn: false,
      sliderPositionX: 360,
      sliderBoxWidth: '',
      sliderWidth: '',
      valueslide: 0,
      totalCarrouselWidth: 0,
      urlQueryPhotos: '/static/api/queryphotos.php',
      // picwidth:[
      // ],
      dataphoto: []
      // pictures: []
    }
  },
  methods: {
    eventMouseDown: function(event) {
      this.mouseDownEventOn = true;
    },
    eventMouseUp: function(event) {
      this.mouseDownEventOn = false;
    },
    eventMouseOut: function(event) {
      this.mouseDownEventOn = false;
      console.log("mouseout");
    },
    eventMouseMove: function(event) {

      if(this.mouseDownEventOn){
        console.log("si event mouse move")
        this.sliderPositionX = event.clientX;
      }

      // console.log("this", this, event.this)
      // console.log("funciona mousew", event.clientX, event.screenX)
      // 
  
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

      // const newphotos = [];
      var self = this;
      this.dataphoto.forEach((photo) => {
        const img = new Image();
        img.src = "/static/api/" + photo.ruta;
        // console.log("img", img.src)

        img.onload = function() {

          const { width, height } = img;
          // newphotos.push({ ...photo, width, height });
          photo.width = img.width;
          photo.height = img.height;
          
          // console.log("inside", photo, img.width)
          var photoWidth = photo.width
          var photoHeight = photo.height
          afterLoaded(photoWidth, self);
        };


      });

      function afterLoaded(photoWidth, self) {
        self.totalCarrouselWidth += photoWidth;
        // console.log("afuera", photoWidth);
        self.sliderBoxWidth = document.getElementById("sliderbox").offsetWidth;
        self.sliderWidth = self.sliderBoxWidth*(self.sliderBoxWidth/self.totalCarrouselWidth);
      }


      // this.dataphoto = newphotos;


      // var self = this;
      // var foto = [];
      //  for (var i = 0; i < this.dataphoto.length; i++) {
      //   //  console.log("self antes", self)
        
      //   foto = new Image();
      //   foto.src = "/static/api/" + this.dataphoto[i].ruta;

      //  foto.onload = (function(nr){
      //   //  console.log("self dentro", self)
      //   var photoWidth = foto.width;
      //   var photoHeight = foto.height;
      //     return function (){
      //       // console.log("self mas adentro", self)
      //       // console.log(nr, foto.width, photoWidth, photoHeight)
      //       // console.log(self.dataphoto)
      //         self.dataphoto[nr]["width"] = photoWidth ;
      //         self.dataphoto[nr]["height"] = photoHeight;
      //     }
        
      //  })(i);

      //  var loadedPhoto = foto.onload;
      //  loadedPhoto();
        
      // // console.log(i, self.dataphoto[i]["width"])
      //  this.totalCarrouselWidth += self.dataphoto[i]['width'];
      
      // }

      
      





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
  position: absolute;
  left: 360px;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>