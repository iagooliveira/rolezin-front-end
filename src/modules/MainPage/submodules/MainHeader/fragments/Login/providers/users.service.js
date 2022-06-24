export default class AuthService {
    /**
     * @param {object} props
     * @param {import('adapters/axios').Axios} props.http
     */
    constructor({ http }) {
      this.http = http;
    }

    async createUser(payload){
        const user = await this.http.post('localhost:8080/usuarios', payload)

        return user
    }
}