import { Professor } from "../interfaces/teacherInterface";
import { Api } from "../Providers";

export const getProfessores = () => Api.get<string>('/teacher/get-all')

export const createProfessor = (professor: Professor) => Api.post<{professor: Professor}>('/teacher/create', {
    nome: professor.nome,
    email: professor.email,
    senha: professor.senha
})