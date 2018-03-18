<template>
<b-row>
     <b-button @click="editfields(getbtneditSaveState.btnInfo)">{{getbtneditSaveState.btnInfo}}</b-button>
     <b-button @click="saveChanges(modulename)" v-if="getbtneditSaveState.btnInfo == 'Cancelar'">Guardar</b-button>
</b-row>

</template>
<script>
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "BtnsEditsave",
  data(){
    return{
      // btnInfo: "Editar",
      // cancelsave: "cancel",
      // disabled: true,
    }
  },
  props:["modulename"],
  computed:{
    ...mapGetters({
      getbtneditSaveState: "getbtneditSaveState"
    })
  },
  methods:{
    ...mapActions({
      saveChanges: "saveChanges"
    }),
    ...mapMutations({
      btneditSaveState: "btneditSaveState",
      editfields: "editfields"
    }),
  }

}
</script>
<style>

</style>
