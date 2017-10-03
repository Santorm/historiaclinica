<template>
<md-layout md-flex='100' class="container">
  <div class="login">
    <h2>Inicio de Sesión</h2>
   <md-layout>
      <form class='md-flex-100' @submit.stop.prevent="submit">
        <md-input-container class='md-flex-100'>
          <label>Usuario</label>
          <md-input required></md-input>
          <span class="md-error">Textarea validation message</span>
        </md-input-container>
        <md-input-container class='md-flex-100'>
          <label>Password</label>
          <md-input required></md-input>
          <span class="md-error">Textarea validation message</span>
        </md-input-container>


        
      </form>
      <md-button class='btn_primario md-primary md-raised'>Inciar Sesión</md-button>
    </md-layout>
  </div>
</md-layout>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .container{
  background-color: aliceblue;
} */

.login{
  margin: 100px auto;
  width: 60%;
  min-width: 200px; 
  /* border: 1px solid grey; */
  border-radius: 5px;
  padding: 20px 100px;
  height: fit-content;
  background-color: rgba(128, 128, 128, 0.14);
 
}

.btn_primario{
  float: right;
}


</style>
