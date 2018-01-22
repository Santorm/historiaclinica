<template>
  <div class="menuaside_box">

    <router-link id='first_element' to="/busqueda">
      <div class="btn_aside">Búsqueda Paciente
        <i class="icon fa fa-search" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/datospersonales">
      <div class="btn_aside">Datos Personales
        <i class="icon material-icons">&#xE85E;</i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Antecedentes
        <i class="icon material-icons">&#xE85F;</i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Motivos de Consulta
        <i class="icon fa fa-comments" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Examen Físico
        <i class="icon fa fa-flask" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Exploración corporal
        <i class="icon fa fa-stethoscope" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/fotografia">
      <div class="btn_aside">Registro fotográfico
        <i class="icon fa fa-camera" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Notas
        <i class="icon fa fa-pencil" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/">
      <div class="btn_aside">Resumen
        <i class="icon fa fa-file-text" aria-hidden="true"></i>
      </div>
    </router-link>
    <router-link to="/panelcontrol">
      <div class="btn_aside">Panel de Control
        <i class="icon fa fa-cogs" aria-hidden="true"></i>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'menuaside',
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menuaside_box {
  /* height: 80vh; */
  min-height: 275px;
  /* max-height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: stretch;
  /* text-align: center; */
}

.first_element {
  margin-top: 20px;
}

.btn_aside {
  width: 100%;
  /* max-height: 6vh; */
  /* height: 48px; */
  /* min-height: 38px; */
  /* max-height: 48px; */
  border-radius: 3px;
  text-transform: capitalize;
  font-size: 11px;
  background-color: #fff ;
  border: 1px solid #928057 ;
  color: #928057 ;
  font-weight: 400;
  line-height: 38px;
  font-size: 14px;
  margin: 3px auto;
  text-align:left;
  padding-left: 20px;
  /* box-sizing:border-box; */
}

.btn_aside:hover {

  background-color: #928057;
  color: #fff;
}

.icon {
  float: right;
  padding: 2%;
  font-size: 1.5em;
}

a{
  text-decoration: none ! important;
}
</style>
