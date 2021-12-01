import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.md';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AgendamentoService } from './agendamento.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  agendamentos:any[] = [];

  public title="Services";
  constructor(
    private agendamento: AgendamentoService,
    private _snackbar: MatSnackBar,
    private toastr: ToastrService,
    ) { }

  openSnackBar() {
    this._snackbar.open("Seu cancelamento foi solicitado, aguarde que entrarmos em contato!", "Fechar");
  }


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
  serviceOff(){
    this._snackbar.open('Desculpe, erro ao tentar editar seu agendamento, tente mais tarde', 'Fechar');
  }

}
