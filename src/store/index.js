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
      { value: null, text: "Estado civil:" },
      { value: "Casado", text: "Casado" },
      { value: "Soltero", text: "Soltero" },
      { value: "Viudo", text: "Viudo" },
      { value: "Divorciado", text: "Divorciado" },
      { value: "Unión Libre", text: "Unión Libre" }
    ],
    optionInstruccion: [
      { value: null, text: "Instrucción:" },
      { value: "Analfabeto", text: "Analfabeto" },
      { value: "Primaria", text: "Primaria" },
      { value: "Bachiller", text: "Bachiller" },
      {
        value: "Estudios Superiores",
        text: "Estudios Superiores"
      }
    ],
    optionGenero: [
      { value: null, text: "Género:" },
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
    getnewPatient(state){
      return state.newPatient;
    },
    getpatientOld(state) {
      if (state.patientSelected != "") {
        const birthday_arr = state.patientSelected.dateage.split("-");
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
    updateDataPatientSelected(state, value) {
      // TODOAHORA: VER COMO SE GUARDA MISMO LA INFORMACION
      state.patientSelected[value[1]] = value[0];
      console.log("funciono la mierda", value);
    },
    fetchUsers(state, response) {
      //state.pacientes = pacientes;
      for (var pacientes in response) {
        state.pacientes=response;
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

        // var ref = firebase.database().ref("dinosaurs");
        // ref
        //   .orderByKey()
        //   .endAt("pterodactyl")
        //   .on("child_added", function(snapshot) {
        //     console.log(snapshot.key);
        //   });



        var consulta = db.ref("pacientes");

       consulta.orderByKey().startAt("datospersonales").on("child_added", function(getvalues) {
          console.log("values", getvalues.val());
          var response = getvalues.val();



          // var parsed = JSON.parse(response);

          // var arr = [];

            // console.log("parsejson", parsed);
          // for (var x in parsed) {
          //   arr.push(parsed[x]);
          // }



          commit("fetchUsers", response);
        },
         function (errorObject) {
          console.log("The read failed: " + errorObject.code);
      });

      // const urlConsulta = "/static/api/consultapacientes.php";
      // Vue.http.post(urlConsulta).then(
      //   function(response) {
      //     commit("fetchUsers", response.data);
      //   },
      //   response => {
      //     // error callback
      //     console.log("Ha fallado la consulta");
      //   }
      // );
    },
    saveChanges({ commit }) {
      // console.log("respuesta", commit)
      commit("btnsave");
      commit("updatePatienteSelected", response.data);
    },
    //QUE HACE ESTE HAY QUE BORRAR?????
    addDataPatientSelected({ commit }) {
      console.log();
    },
    addNewPatientBBDD({ commit, state }) {
      console.log("state", state.newPatient);


      console.log(state.newPatient);
      // function writeUserData(userId, name, email, imageUrl) {
      // db.ref("users/" + userId)
      //TODO: VALIDAR EN TODOS LADOS CON EXPRESIONES REGULARES
      let pacID = (
        state.newPatient.apellidos.toLowerCase().trim().replace(/\//g,"").substr(0, 3) +
        state.newPatient.nombre.toLowerCase().trim().replace(/\//g,"").substr(0, 3) +
        state.newPatient.ciudad.toLowerCase().trim().replace(/\//g,"").substr(0, 2) +
        state.newPatient.dateage.toLowerCase().trim().replace(/\//g,"")
      )
      db.ref("pacientes/"+pacID+"/datospersonales").set(state.newPatient).then(() => {
          console.log('Set succeeded!');

      },error => {
            console.log("error", error);
      });

    }
  }
});
