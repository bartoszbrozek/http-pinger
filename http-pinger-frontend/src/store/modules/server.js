import ServerAPI from '../api/server'

const api = new ServerAPI

const state = {
    servers: [],
    server: {},
}

const getters = {
    servers: (state) => {
        return state.servers
    },
    server: (state) => {
        return state.server
    }
}

const actions = {
    async getAll({ commit }) {
        commit('SET_SERVERS', await api.getAll())
    },

    async getOne({ commit }, id) {
        commit('SET_SERVER', await api.getOne(id))
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

    SET_SERVER(state, server) {
        state.server = server
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