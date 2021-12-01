import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.css']
})
export class CreateAgendamentoComponent implements OnInit {

  FormAgendamentoCreate = new FormGroup({
    rua: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    paciente: new FormControl(''),
    data_visita:new FormControl(''),
    obs: new FormControl(''),
    vacina: new FormControl(''),
  });

  public responseSubmit: string | undefined;

  constructor(

    private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private agendamento: AgendamentoService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.configForm;
  }

  sigUpUser(){
    if ( this.FormAgendamentoCreate.get('password')?.value === this.FormAgendamentoCreate.get('confirmPassword')?.value){
      this.FormAgendamentoCreate.removeControl('confirmPassword')
      this.agendamento.createAgendamento(this.FormAgendamentoCreate.value).subscribe({
        next:(response:any)=>{
          this.toastr.success(`Olá ${response.name}`, 'seu cadastro foi realizado com successo!');
        },
        error:(error:any)=>{
          this.toastr.error('Desculpe, Houve um error durante seu cadastro', 'tente mais tarde:)');
        },
        complete:()=>{
          this.router.navigate(['login'])
        }
      })
    }else{
      this.responseSubmit = "Senhas digitadas não são iguais";
    }
  }

  configForm(){
    this.FormAgendamentoCreate = this.formBuilder.group({
      name:[ null, Validators.required],
      // email:[null, Validators.email],
      // password:[null, Validators.required],
      // confirmPassword:[null, Validators.required],
    });
  }





}
