import { Class } from "../interfaces/classInterface";
import { Api } from "../Providers";

export const getClasses = (id_professror: number) => Api.get<Class[]>('/class/get-all-from-teacher/' + id_professror)

export const createClass = (aula: Class, id_professor: string) => Api.post<{aula: Class, id_professor: string}>('/class/create', {
    nome_aula: aula.title, 
    inicio_aulas: aula.start,
    fim_aulas: aula.end,
    id_professor: id_professor
})