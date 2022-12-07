import { Turma } from "../interfaces/turmaInteface";
import { Api } from "../Providers";

export const CreateClass = (turma: Turma) => Api.post<{
    message(message: any, arg1: { position: "top-center"; autoClose: number; hideProgressBar: false; closeOnClick: true; pauseOnHover: true; draggable: true; progress: undefined; theme: "light"; }): unknown;turma: Turma
}>('/classroom/create', {
    nome: turma.nome,
    professor_id: turma.professor_id,
    limite_aluno: turma.limite_alunos,
    disciplina_id: turma.disciplina_id
})