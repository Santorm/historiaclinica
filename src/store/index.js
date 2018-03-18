import Vue from "vue";
import Vuex from "vuex";
import VueFire from "vuefire";
import { db } from "../firebase_config";
import { bdPacienteSelec } from "../firebase_config";
import { bdPacientes } from "../firebase_config";
//import VueResource from "vue-resource";

Vue.use(Vuex);
//Vue.use(VueResource);

export const store = new Vuex.Store({
         state: {
           newPatient: [],
           patientSelected: [],
           datospersonales: [],
           pacientes: [],
           optionEstadoCivil: [
             { value: "Casado", text: "Casado" },
             { value: "Soltero", text: "Soltero" },
             { value: "Viudo", text: "Viudo" },
             { value: "Divorciado", text: "Divorciado" },
             { value: "Unión Libre", text: "Unión Libre" }
           ],
           optionInstruccion: [
             { value: "Analfabeto", text: "Analfabeto" },
             { value: "Primaria", text: "Primaria" },
             { value: "Bachiller", text: "Bachiller" },
             {
               value: "Estudios Superiores",
               text: "Estudios Superiores"
             }
           ],
           optionGenero: [
             { value: "Femenino", text: "Femenino" },
             { value: "Masculino", text: "Masculino" },
             { value: "GLBT", text: "GLBT" }
           ],
           btneditSaveState: {
             cancelsave: "cancel",
             disabled: true,
             btnInfo: "Editar"
           }

           //y asi sucesivamente van entrando cada una de las etapas de la HC con los estados de cada componente
         },
         /////////////////////
         //////GETTERS//////
         ////////////////////
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
           getoptionInstruccion(state) {
             return state.optionInstruccion;
           },
           getoptionGenero(state) {
             return state.optionGenero;
           },
           getbtneditSaveState(state) {
             return state.btneditSaveState;
           },
           getnewPatient(state) {
             return state.newPatient;
           },
           getDatosPersonales(state) {
             return state.datospersonales;
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
         /////////////////////
         //////MUTATIONS//////
         ////////////////////
         mutations: {
           btnsave(state) {
             state.btneditSaveState.cancelsave = "save";
             state.btneditSaveState.btnInfo = "Editar";
             state.btneditSaveState.disabled = true;
           },
           addIdPatient(state, hc) {
             state.newPatient.hc = hc;
           },
           // updateDataPatientSelected(state, value) {
           //   // TODOAHORA: VER COMO SE GUARDA MISMO LA INFORMACION
           //   state.patientSelected[value[1]] = value[0];
           // },
           fetchUsers(state, response) {
             var result = [];

             if (response.module == "pacientes"){

             for (var i in response.values) {
               result.push(response.values[i]);
             }

             state[response.module] = result;
            }else{
              state[response.module] = response.values;
            }
           },
           editfields(state, value) {
             // console.log("btneditSaveState", value, state.btneditSaveState);

             state.btneditSaveState.disabled = !state.btneditSaveState
               .disabled;
             if (state.btneditSaveState.disabled) {
               state.btneditSaveState.cancelsave = "cancel";
               state.btneditSaveState.btnInfo = "Editar";
             } else {
               state.btneditSaveState.cancelsave = "edit";
               state.btneditSaveState.btnInfo = "Cancelar";
             }
           },
           addPatiente(state, value) {
             // console.log("valor",value)
             state.newPatient = value;
           }
         },

         /////////////////////
         //////ACTIONS//////
         ////////////////////
         actions: {
           //TODO: nO SE ACTUALIZA EL PACIENTE ACTUAL, SOLO LO HACE SI SE HACE FOCUS YA QUE ESA FUNCION LLAMA
           consulta({ commit }) {
             var response = [];

             let consulta = db.ref("pacientes/datospersonales");
             //  TODO: RECUPERAR SOLO LOS DATOSPERSONALES PARA ARMAR LA TABLA DE CONSULTA,NO TODOS LOS DATOS
             // la dificultad esta en hacer una consulta que solo sea de datos personales pero sin filtrar id
             consulta.orderByKey().on(
               "value",
               function(getvalues) {
                 // console.log("entro en consulta", getvalues.val());
                 commit("fetchUsers", {
                   values: getvalues.val(),
                   module: "pacientes"
                 });
               },
               function(errorObject) {
                 console.log("The read failed: " + errorObject.code);
               }
             );
           },
           fetchDatosModulo({ commit, state }, modulename) {

             let hc = state.patientSelected.hc;
             let consulta = db.ref("pacientes/" + modulename + "/" + hc);
             consulta.orderByKey().on(
               "value",
               function(getvalues) {
                 commit("fetchUsers", {
                   values: getvalues.val(),
                   module: modulename
                 });
               },
               function(errorObject) {
                 console.log("The read failed: " + errorObject.code);
               }
             );
           },
           saveChanges({ commit, state }, modulename) {
             console.log("saaaave chaaagne", modulename);
             commit("btnsave");
             // commit("updatePatienteSelected", response.data);

             //AQUIIIIIIIIIIIIIIIIIIIIIIIIII
             let hc = state.patientSelected.hc;
             // var consulta = db.ref("pacientes/"+hc+"/datospersonales");
             var updates = {};
             updates["pacientes/" + modulename + "/" + hc] =
               state[modulename];
             db.ref().update(updates);
           },
           //QUE HACE ESTE HAY QUE BORRAR?????
           addDataPatientSelected({ commit }) {
             console.log();
           },
           addNewPatientBBDD({ commit, state }) {
             console.log("state", state.newPatient);

             console.log(state.newPatient);
             //TODO: VALIDAR EN TODOS LADOS CON EXPRESIONES REGULARES
             let pacID =
               state.newPatient.apellidos
                 .toLowerCase()
                 .trim()
                 .replace(/\//g, "")
                 .substr(0, 3) +
               state.newPatient.nombre
                 .toLowerCase()
                 .trim()
                 .replace(/\//g, "")
                 .substr(0, 3) +
               state.newPatient.ciudad
                 .toLowerCase()
                 .trim()
                 .replace(/\//g, "")
                 .substr(0, 2) +
               state.newPatient.dateage
                 .toLowerCase()
                 .trim()
                 .replace(/\//g, "");

             commit("addIdPatient", pacID);

             // .ref("pacientes/" + pacID + "/datospersonales")
             db
               .ref("pacientes/datospersonales/" + pacID + "/")
               .set(state.newPatient)
               .then(
                 () => {
                   console.log("Set succeeded!");
                 },
                 error => {
                   console.log("error", error);
                 }
               );
           }
         }
       });
