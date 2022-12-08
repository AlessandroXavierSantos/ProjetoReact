import { User, User as UserToLogin } from "../interfaces/userToLogin";
import { Api } from "../Providers";

export const userLogin = (user: UserToLogin) => Api.post<{user: UserToLogin}>('/users/login', {
    email: user.email,
    senha: user.senha
})

export const createUser = (user: User) => Api.post<{user: User}>('/users/create', {
    usuario: user.nome,
    email: user.email,
    senha: user.senha
})