import Vue from "vue";
import Vuex from "vuex";
//import VueResource from "vue-resource";


Vue.use(Vuex);
//Vue.use(VueResource);

export const store = new Vuex.Store({
         state: {
           patientSelected: [],
           datospersonales: [],
           pacientes: []
           //y asi sucesivamente van entrando cada una de las etapas de la HC con los estados de cada componente
         },
         getters: {
           getpatientSelected(state) {
             return state.patientSelected;
           },
           getpatientFetched(state) {
             return state.pacientes;
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
           //mutatios es lo mismo que getters, pero como segundo argumento despues de state, se puede añadir un objeto o un valor pejm userID
           // De esta manera lo que hacemos es que cada vez que vayamos a cambiar el estado del paciente pase por mutaciones y no directamente y así poder gestiuonar estado
           //state.user.find(user => {user.id = user_id}) esta linea sirve para encontrar el valor edl objero
           fetchUsers(state, response) {
             //state.pacientes = pacientes;
             for (var pacientes in response) {
               state.pacientes.push(response[pacientes]);
             }
           }
         },
         actions: {
           consulta({ commit }) {
             //console.log("func", VueResource);
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
           }
         }
       });

