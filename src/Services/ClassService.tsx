import { Class } from "../interfaces/classInterface";
import { Api } from "../Providers";

export const getClasses = (id_professror: number) => Api.get<Class[]>('/class/get-all-from-teacher/' + id_professror)

// export const CreateClass = () => Api.post<{aula: Class}>('/class/create', {
//     nome: aula.nome,

// })