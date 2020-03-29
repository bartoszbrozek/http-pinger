import ServerAPI from '../api/server'

const api = new ServerAPI

const state = {
    servers: [],
}

const getters = {
    servers: (state) => {
        return state.servers
    }
}

const actions = {
    async getAll({ commit }) {
        commit('SET_SERVERS', await api.getAll())
    }
}

const mutations = {
    SET_SERVERS(state, servers) {
        state.servers = servers
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}