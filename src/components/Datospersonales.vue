<template>

  <b-container fluid>
    <b-row>
        <h2 center>METER UN COMPONENTE O HACER DIRECTAMENTE??NOMBRE DEL PACIENTE</h2>
    </b-row>
  <pre>{{$data}}</pre>
  </b-container>

</template>

<script>
import { EventBus } from '../commons/event-bus'
export default {
  name: 'datospersonales',
  components:{
    //consultaBusqueda
  },
  data () {
    return {
     pacienteActivo: {},
    }
  },
  methods: {
    eventBus: function() {
      var self = this;
      console.log("eventBusss")

      EventBus.$once('paciente', function(row) {
        console.log("row de eventbus", row);
        // self.pacienteActivo = {};
        self.pacienteActivo = row;
        console.log("se guardo")
      })
    }
  },
  mounted() {
    console.log("mounted");
    this.eventBus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
