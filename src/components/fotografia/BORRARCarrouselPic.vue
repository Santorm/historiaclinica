<template>
  <div>
    <img src:{{picURL}}>


    <!-- <p>Carrousell PIc</p> -->
    <!-- <div class="carrousel_box">
      <div class="picture_box" v-for="(pic, index) in pictures" :style="{backgroundImage: 'url(/static/pics/'+pic+')'}"></div>
    </div> -->

    <!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'carrouselPic',
  components: {
  },
  data() {
    return {
      picURL:'',
      picwidth:[
    76,
    202,
    102,
    202,
    102,
    102,
    102
    ]
      ,
      pictures: [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
        "pic4.jpg",
        "pic5.jpg",
        "pic6.jpg",
        "pic7.jpg",
        "pic8.jpg",
      ]
    }
  },
  methods: {
    
    getPictureHeight: function (index) {
      // this.picwidth="300";
      // return "300px"
    console.log("funcionaaa", index)
    // return false;
    //var foto = new Image();
      foto.src = "/static/pics/" + this.pictures[index];
      var ancho = foto.width;
      var alto = foto.height;
      // this.picwidth = ancho;
      // this.picwidth.push(ancho);
      console.log(ancho, alto)
      // alert(ancho )
      // alert(alto)
      // return ancho;
    }
  }
}
</script>
<style scoped>
.picture_box {
  /* width: 200px; */
  height: 150px;
  border: 1px solid blue;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}

.carrousel_box {
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  height: 150px;
  border: 1px solid red;
}
</style>