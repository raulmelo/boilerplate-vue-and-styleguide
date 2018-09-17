import axios from 'axios'

const APIService = {
    getById: (endpoint, id) => {
        return new Promise(resolve => {
            axios.get(`/auth/${endpoint}/${id}`).then(resp => {
                resolve(resp)
            })
        })
    },
    deleteById: (endpoint, id) => {
        return new Promise(resolve => {
            axios
                .delete(`/auth/${endpoint}/${id}`)
                .then(resp => {
                    resolve(resp)
                })
        })
    },
    get: endpoint => {
        return new Promise(resolve => {
            axios.get(`/auth/${endpoint}`).then(resp => {
                resolve(resp)
            })
        })
    },
    put(endpoint, data) {
        return new Promise(resolve => {
            axios.put(`/auth/${endpoint}`, data).then(resp => {
                resolve(resp)
            })
        })
    },
    post(endpoint, data) {
        return new Promise(resolve => {
            axios.post(`/api${endpoint}`, data).then(resp => {
                resolve(resp)
            })
        })
    }
}

export default APIService