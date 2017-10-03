<template>
  <md-layout md-flex='100' class="container">
    <div class="altapaciente">
      <!-- <h2>Nueva Historia clínica</h2> -->
  
      <md-layout>
  
        <form class='md-flex-100' @submit.stop.prevent="submit">
  
          <md-input-container class='md-flex-100'>
            <label>Nombre</label>
            <md-input type="text" v-model='paciente.nombre' required></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-input-container class='md-flex-100'>
            <label>Apellido</label>
            <md-input type="text" v-model='paciente.apellido' required></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-input-container class='md-flex-100'>
            <label>Fecha de Nacimiento</label>
            <md-input type="date" v-model='paciente.dateAge' required></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-input-container class='md-flex-100'>
            <label>Teléfono</label>
            <md-input type="tel" v-model='paciente.telefono' required></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-input-container class='md-flex-100'>
            <label>Email</label>
            <md-input type="email" v-model='paciente.email'></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-input-container class='md-flex-100'>
            <label>Ciudad</label>
            <md-input type="text" v-model='paciente.ciudad' required></md-input>
            <span class="md-error">No se han encontrado resultados</span>
          </md-input-container>
          <md-button @click.prevent='altapacientes' class='btn_primario md-primary md-raised'>Agregar</md-button>
        </form>
  
      </md-layout>
  
      <pre>{{$data | json}}</pre>
  
    </div>
  </md-layout>
</template>

<script>

export default {
  name: 'altapaciente',
  data() {
    return {
      urlAlta: '/static/api/altapacientes.php',
      // urlConsulta:'/static/api/consultapacientes.php',
      paciente: {
        nombre: '',
        apellido: '',
        dateAge: '',
        telefono: '',
        email: '',
        ciudad: '',
      }

    }
  },
  methods: {
    altapacientes: function () {
      this.$http.post(this.urlAlta, this.paciente).then(function (response) {
        console.info('bien', response);
        // get body data
        //this.someData = response.body;

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
/* ../assets/consultapacientes.php */


/* https://randomuser.me/api/?results=50 */
/* 
.container {
  background-color: aliceblue;
} */

.altapaciente {
  margin: 0 auto;
  width: 100%;
  min-width: 200px;
  /* border: 1px solid grey; */
  border-radius: 5px;
  padding: 00px 100px;
  height: fit-content;
  /* background-color: rgba(128, 128, 128, 0.14); */
}

.md-input-container{
  margin: 4px 0 5px;
  font-size: 14px;
}

.md-button{
  float: right;
    margin: 30px 0;
    text-transform: capitalize;
}
</style>
