<template>
      <b-input-group class="inputgroup" :prepend="prepend">
          <b-form-input 
          :value="datavalue"
          :class="[inputDisabled ? notediting : editing]"
          :disabled="inputDisabled">   
          </b-form-input>
      </b-input-group>
</template>

<script>
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      notediting: "notediting",
      inputgroup: "inputgroup",
      editing: "editing"
    };
  },
  props: ["prepend", "datavalue"],
  computed: {
    inputDisabled: function() {
      return true;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputgroup {
  margin-bottom: 10px;
}

.editing {
  background-color: aliceblue;
}

.notediting {
  background-color: #fff;
}
</style>
