import { api } from "./api";

export class UserService {
    async create(data) {
        const user:any = api.post('/users', data);
        return user.data;
    }
}