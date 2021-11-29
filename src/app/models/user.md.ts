export interface User {
  uuid: number,
  cpf: string,
  first_name: string,
  last_name: string,
  email:string
  card_sus:string
}

export interface Login {
  id?: number,
  name?: string,
  email?: string,
  password?: string,
  created_at?:Date,
}