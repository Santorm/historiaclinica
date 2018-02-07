import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        objetousuario:[
            {
                //aqui van los objetos en este caso sería el paciente elegido, o si son mas pacientes otro objeto
            }
        ],
        datospersonales:[
            {
                // aqui irian los objetos cada uno con un valor de los datos personales, y asi 
            }
         ]
            //y asi sucesivamente van entrando cada una de las etapas de la HC con los estados de cada componente
    },
    mutations: {},
    actions: {},
    getters: {},
})