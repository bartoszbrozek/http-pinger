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
    },

    async add({ commit }, server) {
        commit('ADD_SERVER', await api.add(server))
    },

    async edit({ commit }, server) {
        commit('EDIT_SERVER', await api.edit(server))
        commit('SET_SERVERS', await api.getAll())
    },

    async delete({ commit }, server) {
        await api.delete(server)
        commit('SET_SERVERS', await api.getAll())
    }
}

const mutations = {
    SET_SERVERS(state, servers) {
        state.servers = servers
    },

    ADD_SERVER(state, server) {
        if (server !== undefined) {
            state.servers.push(server)
        }
    },

    EDIT_SERVER(state, server) {
        if (server !== undefined) {
            state.servers.push(server)
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}