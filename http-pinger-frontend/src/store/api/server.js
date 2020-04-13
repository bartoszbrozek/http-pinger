export default class ServerAPI {
    async getOne(server) {
        const id = typeof server.id !== 'undefined' ? server.id : server
        const res = await window.axios.get(`/server/${id}`)
        let { data } = await res

        return data.data
    }

    async getAll() {
        const res = await window.axios.get('/server')
        let { data } = await res

        return data.data
    }

    async add(server) {
        const res = await window.axios.post('/server', server)
        let { data } = await res

        return data.data
    }

    async edit(server) {
        const res = await window.axios.put(`/server/${server.id}`, server)
        let { data } = await res

        return data.data
    }

    async delete(server) {
        const res = await window.axios.delete(`/server/${server.id}`)
        let { data } = await res

        return data.data
    }
}