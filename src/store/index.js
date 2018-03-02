import Vue from "vue";
import Vuex from "vuex";
//import VueResource from "vue-resource";


Vue.use(Vuex);
//Vue.use(VueResource);

export const store = new Vuex.Store({
         state: {
           patientSelected: [],
           datospersonales: [],
           pacientes: [],
           optionEstadoCivil: [
             { value: null, text: "Escoja estado civil" },
             { value: 1, text: "Casado" },
             { value: 2, text: "Soltero" },
             { value: 3, text: "Viudo" },
             { value: 4, text: "Divorciado" },
             { value: 5, text: "Unión Libre" }
           ],
           btneditSaveState: {
             cancelsave: "cancel",
             disabled: true,
             btnInfo: "Editar"
            }

           //y asi sucesivamente van entrando cada una de las etapas de la HC con los estados de cada componente
         },
         getters: {
           getpatientSelected(state) {
             return state.patientSelected;
           },
           getpatientFetched(state) {
             return state.pacientes;
           },
           getoptionEstadoCivil(state) {
             return state.optionEstadoCivil;
           },
           getbtneditSaveState(state) {
             return state.btneditSaveState;
           },
           getpatientOld(state) {
             if (state.patientSelected != "") {
               const birthday_arr = state.patientSelected.dateage.split(
                 "-"
               );
               const birthday_date = new Date(
                 birthday_arr[0],
                 birthday_arr[1] - 1,
                 birthday_arr[2]
               );
               const ageDifMs = Date.now() - birthday_date.getTime();
               const ageDate = new Date(ageDifMs);

               //return birthday_arr + birthday_date;

               return Math.abs(ageDate.getUTCFullYear() - 1970);
             }
           }
         },
         user: {},
         mutations: {
           btnsave(state){
              state.btneditSaveState.cancelsave = "save";
              state.btneditSaveState.btnInfo = "Editar";
              state.btneditSaveState.disabled = true;
           },
           updateDataPatientSelected(state, value) {
// TODOAHORA: VER COMO SE GUARDA MISMO LA INFORMACION
             state.patientSelected[value[1]] = value[0];
              console.log("funciono la mierda", value)

             // TODO: Ya se recibe como parámetro el valor cabiado y el nombre key, ahora si se puede cambiar el valor
           },
           fetchUsers(state, response) {
             //state.pacientes = pacientes;
             for (var pacientes in response) {
               state.pacientes.push(response[pacientes]);
             }
           },
           editfields(state, value) {
              // console.log("btneditSaveState", value, state.btneditSaveState);

             state.btneditSaveState.disabled = !state.btneditSaveState.disabled;
             if (state.btneditSaveState.disabled) {
               state.btneditSaveState.cancelsave = "cancel";
               state.btneditSaveState.btnInfo = "Editar";
             } else {
               state.btneditSaveState.cancelsave = "edit";
               state.btneditSaveState.btnInfo = "Cancelar";
             }
           }
         },
         actions: {
           //TODO: nO SE ACTUALIZA EL PACIENTE ACTUAL, SOLO LO HACE SI SE HACE FOCUS YA QUE ESA FUNCION LLAMA
           consulta({ commit }) {
             console.log("func");
             const urlConsulta = "/static/api/consultapacientes.php";
             Vue.http.post(urlConsulta).then(
               function(response) {
                 commit("fetchUsers", response.data);
               },
               response => {
                 // error callback
                 console.log("Ha fallado la consulta");
               }
             );
           },
           saveChanges({ commit }) {

            // console.log("respuesta", commit)
             commit("btnsave");
             commit("updatePatienteSelected", response.data);
           }
         }
       });

