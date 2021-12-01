import { User } from "./user.md";

export interface Agendamento{
    uuid?: string,
    data_criacao?: string
    data_visita: string,
    obs?: string,
    status?: string,
    paciente?: any,
    //TODO: Lembrar de criar o modelo de vacina
    vacina: string,
    rua?: string,
    numero?: string,
    bairro?: string,
    cidade?: string
}