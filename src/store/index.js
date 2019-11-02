import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem("token") || null,
    },
    getters:{
        loggedIn(state){
            return state.token !== null
        }
    },
    mutations: {
        login(state, token) {
            state.token = token
        }
    },
    actions: {
        login(context, data) {
            return new Promise((resolve, reject) => {
                axios.post("/login", {
                    username: data.username,
                    password: data.password
                })
                    .then(response => {
                        var token = response.data.access_token;
                        localStorage.setItem('token', token)
                        context.commit('login', token)
                        resolve(response)
                    })
                    .catch(error => {
                        //console.log(error)
                        reject(error)
                    })
            })
        }
    },
    modules: {}
})