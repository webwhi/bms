import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTimeToken } from '@/utils/auth'
export default {
    namespaced: true,
    state: () => ({
       token: localStorage.getItem('token')||''
    }),
    mutations: {
        setToken(state,token) {
            state.token = token
            localStorage.getItem('token',token)
        }
    },
    actions:{
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo)
                    .then((res) => {
                        console.log(res);
                        commit('setToken', res.token)
                        setTimeToken()
                        router.replace('/')
                        resolve()
                    })
                    .catch((err) => {
                    reject(err)
                })
            })
        },
        logout({commit})  {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        }
   },
}