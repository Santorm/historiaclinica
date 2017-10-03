<template>
    <div>
        <p>Fotografia</p>
        <carrousel/>

        <load-pics :paciente-activo='pacienteActivo'/>
        <!-- <router-link to="/fotografia/carrousel">
        <div>
          boton
        </div>
      </router-link> -->
<!--Quitar de veu router o dejar para un segundo  <router-view></router-view>         -->

    </div>
</template>
<script>
import carrousel from './fotografia/carrousel'
import loadPics from './fotografia/loadPics'
export default {
    name: 'fotografia',
    props: [
        'pacienteActivo'
    ],
    data() {
        return {

        }
    },
    components: {
        carrousel,
        loadPics
       
    }
}


</script>
<style scope>

</style>