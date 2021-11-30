import { User } from "./user.md";

export interface Agendamento{
    uuid: string,
    data_criacao: string
    data_visita: string,
    obs?: string,
    status: string,
    paciente: User,
    //TODO: Lembrar de criar o modelo de vacina
    vacina: string
}