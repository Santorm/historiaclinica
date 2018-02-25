<template>
      <b-input-group class="inputgroup" :prepend="prepend">
          <b-form-input
          :id="id"
          :name="name"
          v-model="value"
          :class="[disabled ? notediting : editing]"
          :disabled="disabled"
          @change="changevent"

          >
          </b-form-input>

        </b-input-group>

</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing",
      editfields: "",
      value: "",
    };
  },
  props: ["prepend", "id", "name", "disabled"],
  computed: {
    ...mapGetters({
      getpatientSelected: "getpatientSelected"
    })
  },
  methods: {
    ...mapMutations({
      updateDataPatientSelected: "updateDataPatientSelected"
    }),
    changevent: function(){
      let payload = [this.value, this.name]
      this.updateDataPatientSelected(payload);
    }
  },
  created: function(){
      let namekey = this.name;
      if (namekey == "nombre") {

        this.value = this.getpatientSelected[namekey] +" "+this.getpatientSelected["apellidos"]

      } else {
        this.value = this.getpatientSelected[namekey];
         //return this.getpatientSelected[namekey];
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
