<template>
  <div class="container">
    <div class="nav_box">
      <router-link to="/panelcontrol/altapaciente">
        <div :class="[{btn_active : btnactive === 'alta' , btn_desactive : btnactive !== 'alta' }]" class="nav_box_item">
          <i class="icon material-icons">&#xE145;</i>
          <span>Nuevo</span>
          <div v-if="btnactive === 'alta'" class="underline"></div>
        </div>
      </router-link>
      <router-link to="/panelcontrol/consulta">
        <div :class="[{btn_active : btnactive === 'consulta' , btn_desactive : btnactive !== 'consulta' }]" class="nav_box_item">
          <i class="icon material-icons">&#xE8B6;</i>
          <span>Buscar</span>
          <div v-if="btnactive === 'consulta'" class="underline"></div>
        </div>
      </router-link>
    </div>
    
    <div class="panelcontrol">

     
      <router-view></router-view>

    </div>
    <!-- <pre>{{$data}}</pre> -->
  </div>
</template> 

<script>
// import panelconsulta from './panelcontrol/panelconsulta'
export default {
  name: 'panelcontrol',
  props: [
    'altapaciente'
  ],
  data() {
    return {
      // inputbusqueda:'',
      btnactive: '',
      btn_alta_active: false,
      btn_consulta_active: false,
      mostrartabla: null,
      urlConsulta: '/static/api/consultapacientes.php',
      pacientes: []
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.btnactive = '';
    //console.log("se ejecutara nex", from.path);
    if (to.path === '/panelcontrol/altapaciente') {
      this.btnactive = 'alta';
      // this.btn_consulta_active = false;
      // this.btn_alta_active =  true;
    } else if (to.path === '/panelcontrol/consulta') {
      this.btnactive = 'consulta';
      // this.btn_consulta_active = true;
      // this.btn_alta_active =  false;
    }
    next();
  },
  methods: {
    consultatodos: function () {
      // alert('sirve')
      // GET /someUrl

      this.$http.post(this.urlConsulta).then(function (response) {
        // for(var persona in response.data){
        //   console.log(response.data);
        //   // console.log(response.data[persona]); recorre letra por letra
        //   // console.log(persona);
        // }
        // console.warn(response.data);
        // console.info(response.data[0]);
        for (var pacientes in response.data) {
          // console.warn(response.data[persona]);
          this.pacientes.push(response.data[pacientes]);
        }

        // var obk = JSON.parse(response.data);
        // console.warn(obk);
        // get body data
        //this.someData = response.body;
        this.mostrartabla = true;

      }, response => {
        // error callback
        console.log('mal', response);
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container {
  background-color: aliceblue;
  width: 100%;
  height: 80%;
  overflow-y: auto;
} */

.panelcontrol {
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-width: 200px;
  /* border: 1px solid grey; */
  border-radius: 5px;
  /* overflow: auto; */
  /* height: 90%; */
  /* padding: 0 30px 30px 30px ; */
  /* height: fit-content; */
  /* background-color: rgba(128, 128, 128, 0.14); */
  overflow-y: auto;
  
}

.nav_box {
  /* position: relative; */
  width: 100%;
  height: 70px;
  background-color: #928057;
  text-align: center;
  border-radius: 5px;
}

.nav_box_item {
  text-align: center;
  display: inline-block;
  margin: 10px 30px;
  width: 60px;
  height: 60px;
}


.nav_box_item:hover {
  color: #06173e;
}



.btn_desactive {
  color: #fff;
}

.btn_active {
  color: #06173e;
}

.icon {
  font-size: 30px;
  /* position:absolute; */
}

.nav_box span {
  display: block;
  font-size: 12px;
}

.underline {
  width: 60px;
  height: 3px;
  background-color: #06173e;
  position: relative;
}
</style>
