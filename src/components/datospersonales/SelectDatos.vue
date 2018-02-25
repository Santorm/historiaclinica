<template>
      <b-form-select
      :class="[disabled ? notediting : editing]"
      :style="selectinput"
      v-model="selected"
      :options="options"
      :disabled="disabled"/>

</template>

<script>
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      selected: null,
      notediting: "notediting",
      editing: "editing",
      selectinput: {
         marginBottom: '10px'
      }
    };
  },
  props: ["options", "disabled"],
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
