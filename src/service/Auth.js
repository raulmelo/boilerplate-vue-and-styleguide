import axios from 'axios'
import store from '../store'

const API_URL = process.env.VUE_APP_API

const APIService = {
    getById: (endpoint, id) => new Promise((resolve, reject) => {
            axios.get(`${API_URL}/auth/${endpoint}/${id}`).then((resp) => {
                resolve(resp)
            })
        }),
    deleteById: (endpoint, id) => new Promise((resolve, reject) => {
            axios
            .delete(`${API_URL}/auth/${endpoint}/${id}`)
            .then((resp) => {
                resolve(resp)
            }).catch((err) => {
              store.commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        }),
    get: endpoint => new Promise((resolve, reject) => {
            axios.get(`${API_URL}/auth/${endpoint}`).then((resp) => {
                resolve(resp)
            }).catch((err) => {
              store.commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        }),
    put(endpoint, data) {
        return new Promise((resolve, reject) => {
            axios.put(`${API_URL}/auth/${endpoint}`, data).then((resp) => {
                resolve(resp)
            }).catch((err) => {
              store.commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
    },
    post(endpoint, data) {
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/api${endpoint}`, data).then((resp) => {
                resolve(resp)
            }).catch((err) => {
              store.commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
    },
}

export default APIService
