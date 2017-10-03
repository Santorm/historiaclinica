import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import busqueda from '@/components/busqueda'
import panelcontrol from '@/components/panelcontrol'
import fotografia from '@/components/fotografia'
import altapaciente from '@/components/panelcontrol/altapaciente'
import panelconsulta from '@/components/panelcontrol/panelconsulta'
import carrousel from '@/components/fotografia/carrousel'
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/busqueda',
          name: 'busqueda',
          component: busqueda
        },
        {
          path: '/panelcontrol',
          name: 'panelcontrol',
          component: panelcontrol,
          children: [
            {
              path: '/panelcontrol/consulta',
              name: 'panelconsulta',
              component: panelconsulta,
              props: true
            },
            {
              path: '/panelcontrol/altapaciente',
              name: 'altapaciente',
              component: altapaciente,
              props: true
            }
          ]
        },
        {
          path: '/fotografia',
          name: 'fotografia',
          component: fotografia,
          props: true,
          children: [
            {
              path: '/fotografia/carrousel',
              name: 'carrousel',
              component: carrousel,
              props: true
            }

          ]
        }
        

      ]
    }
  ]
})
