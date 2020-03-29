export default class ServerAPI {
    async getAll() {
        const res = await window.axios.get('/server')
        let { data } = await res

        return data.data
    }
}