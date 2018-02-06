<template>

  <b-container fluid>
    <b-row>
        <h2 center>NOMBRE DEL PACIENTE</h2>
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
     pacienteActivo:{},
    }
  },
  methods: {
    eventBus: function() {
      var self = this;
      console.log("eventBusss")

      EventBus.$on('paciente', function(row) {
        console.log("row", row);
        // self.pacienteActivo = {};
        self.pacienteActivo = row;
        console.log("se guardo")
      })
    }
  },
  created() {
    this.eventBus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
