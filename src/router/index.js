import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import signup from "@/components/signup";
import busqueda from '@/components/busqueda'
import datospersonales from '@/components/datospersonales'
import panelcontrol from '@/components/panelcontrol'
import fotografia from '@/components/fotografia'
import altapaciente from '@/components/panelcontrol/altapaciente'
import panelconsulta from '@/components/panelcontrol/panelconsulta'
import carrousel from '@/components/fotografia/carrousel'
import firebase from "firebase"

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta:{
        requiresAuth: true
      },
      children: [
        {
          path: "/busqueda",
          name: "busqueda",
          component: busqueda,
          meta:{
        requiresAuth: true
          },
        },
        {
          path: "/datospersonales",
          name: "datospersonales",
          component: datospersonales
        },
        {
          path: "/panelcontrol",
          name: "panelcontrol",
          component: panelcontrol,
          children: [
            {
              path: "/panelcontrol/consulta",
              name: "panelconsulta",
              component: panelconsulta,
              props: true
            },
            {
              path: "/panelcontrol/altapaciente",
              name: "altapaciente",
              component: altapaciente,
              props: true
            }
          ]
        },
        {
          path: "/fotografia",
          name: "fotografia",
          component: fotografia,
          props: true,
          children: [
            {
              path: "/fotografia/carrousel",
              name: "carrousel",
              component: carrousel,
              props: true
            }
          ]
        }
      ]
    }
  ]



});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router
