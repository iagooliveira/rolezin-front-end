export default class AuthUseCases {
    /**
     * @param {object} props
     */
    constructor({ usersService }) {
      this.usersService = usersService;
    }

    async createUser(formData){
        const response = await this.usersService.createUser(formData);

        return response;
    }
}  