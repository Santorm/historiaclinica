<template>
<b-input-group class="inputgroup" :prepend="prepend">
      <b-form-select
      :name="name"
      :class="[disabled ? notediting : editing]"
      :style="selectinput"
      v-model="value"
      :options="options"
      :disabled="getbtneditSaveState.disabled"
      :cancelsave="getbtneditSaveState.cancelsave"/>
</b-input-group>

</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      value: null,
      notediting: "notediting",
      editing: "editing",
      selectinput: {
         marginBottom: '10px'
      }
    };
  },
  props: ["options", "disabled", "prepend", "name", "cancelsave"],
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected",
      getbtneditSaveState: "getbtneditSaveState"
    })
  },
  methods: {
    ...mapMutations({
      updateDataPatientSelected: "updateDataPatientSelected"
    }),
    changevent: function(){
      console.log("change event")
        let payload = [this.value, this.name]
        // console.log("paulod", payload)
        this.updateDataPatientSelected(payload);

    },
    getInfopatientSelected: function(){

      let namekey = this.name;
      // if (namekey == "nombre") {

      //   this.value = this.getpatientSelected[namekey] +" "+this.getpatientSelected["apellidos"]

      // } else {
        this.value = this.getpatientSelected[namekey];
         //return this.getpatientSelected[namekey];
      // }

  }
  },
  created: function(){
      this.getInfopatientSelected();
  },
    beforeUpdate: function (){
    console.log("before update", this.getbtneditSaveState.cancelsave)

     if(this.getbtneditSaveState.cancelsave == "cancel"){
      this.getInfopatientSelected();
     }else if(this.getbtneditSaveState.cancelsave == "save"){
        this.changevent();
     }


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inputgroup {
  margin-bottom: 10px;
}

</style>
