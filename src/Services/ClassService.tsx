import { Class } from "../interfaces/classInterface";
import { Api } from "../Providers";

export const getClasses = (id_professror: string) => Api.get<Class[]>('/class/get-all-from-teacher/' + id_professror)

export const createClass = (aula: Class) => Api.post<{aula: Class}>('/class/create', {
    title: aula.title, 
    start: aula.start,
    end: aula.end,
    id_professor: aula.id_professor
})