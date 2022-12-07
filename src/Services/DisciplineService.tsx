import { Discipline } from "../interfaces/disciplineInterface";
import { Api } from "../Providers";

export const getDisciplines = () => Api.get<string>('discipline/get-all');

export const createDisciplina = (disciplina: Discipline) => Api.post<{disciplina: Discipline}>('discipline/create', {
    nome: disciplina.nome,
    professor_id: disciplina.professor_id
})