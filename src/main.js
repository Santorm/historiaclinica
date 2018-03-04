// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueResource from "vue-resource";
import App from "./App";
import router from "./router";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import firebase from "firebase";
import VueFire from "vuefire";

Vue.use(VueFire);
//import { firebase_config } from "./firebase_config";
// firebase.initializeApp(firebase_config);

// //TODO: sacr esta variable a un archive externo y que reconozca
// var config = {
//   apiKey: "AIzaSyDceSDI2aDdLH-X5JSCNu7hQQCrWhColRg",
//   authDomain: "historiaclinicalp.firebaseapp.com",
//   databaseURL: "https://historiaclinicalp.firebaseio.com",
//   projectId: "historiaclinicalp",
//   storageBucket: "historiaclinicalp.appspot.com",
//   messagingSenderId: "693254719094"
// };

// // firebase.initializeApp(config);
// var firebaseApp = firebase.initializeApp(config);
// export const db = firebaseApp.database();


// export const db = firebaseApp.database();

Vue.use(VueResource);

Vue.config.productionTip = false;

//bus de datos para conectar el id del paciente con la cabecera y el resto de componentes
var bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
