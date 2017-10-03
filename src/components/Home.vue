<template>
  <div class="home">
    <header class='header_box'>
      <homeheader></homeheader>
    </header>
    <div class="section_content">
      <div class='menu_aside'>
        <menuaside></menuaside>
      </div>
      <div class="content_box">
        <router-view :pacienteActivo="pacienteActivo" ></router-view>
      </div>
    </div>
<!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
import { EventBus } from '../commons/event-bus'
import menuaside from './menuaside'
import homeheader from './homeheader'
import login from './login'
import panelcontrol from './panelcontrol'
import fotografia from './fotografia'
import panelconsulta from './panelcontrol/panelconsulta'
export default {
  name: 'home',
  data() {
    return {
      pacienteActivo: {}
    }
  },
  components: {
    menuaside,
    homeheader,
    login,
    panelcontrol,
    fotografia
  },
  methods: {
  eventBus: function() {
      var self = this
  // console.log("se cretBuseo ev")
      EventBus.$on('paciente', function(row) {
        //  console.log("home row", row)
        // self.pacienteActivo = {}
        self.pacienteActivo = row
      })
    }
},
created(){
  this.eventBus();
}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
/* ///clase container para todos los elementos/// */

/* .container {
  background-color: aliceblue;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch; 
  background-color: #fff;
  border: solid 1px cyan;
  
} */


.home {
  width: 100%;
  height: 100vh;
  /* border: solid 1px grey; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fff;
}

.header_box {
  width: 100%;
  height: 20vh;
  min-height: 150px;  
  /* border: 1px solid red; */
}

.section_content {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:stretch;
  border: solid 1px red;
}

.menu_aside {
  width: 250px;
  min-width: 250px;
  text-align: center;
  /* min-height: 568px; */
  border: 1px solid blue;
    padding: 10px;
}

.content_box {
  background-color: aliceblue;
  width: inherit;
  /* height: 80vh; */
  background-color: #fff;
}
</style>
