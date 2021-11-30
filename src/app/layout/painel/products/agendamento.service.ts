import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/models/agendamento.md';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

public token = window.sessionStorage.getItem("token")

constructor(private http:HttpClient) { }


  getAgendamentos():Observable<Agendamento[]>{
    const body = {Authorization:`Bearer ${this.token}`}
    return this.http.get<Agendamento[]>(`${environment.api}agendamentos/`,{headers:body})
  }
  createAgendamento(agendamento:Agendamento){
    const body = {Authorization:`Bearer ${this.token}`}
    return this.http.post(`${environment.api}agendamentos/`,{headers:body})
  }
}
