import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.md';

import { AgendamentoService } from './agendamento.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  agendamentos:any[] = [];

  public title="Services";
  constructor(private agendamento: AgendamentoService) { }

  ngOnInit() {
    this.agendamento.getAgendamentos().subscribe(
      {
        next:(data:any) => {
          var agenda:User[] = data;
          this.agendamentos = agenda

        },error:(error: any) => {

        },complete:()=>{
        
        }
      }
    )
  }
}
