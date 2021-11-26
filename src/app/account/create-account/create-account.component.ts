import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  FormUserOnSubmit = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public responseSubmit: string | undefined;

  constructor(
    private formBuilder:FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.configForm();
  }

  sigUpUser(){
    if ( this.FormUserOnSubmit.get('password')?.value === this.FormUserOnSubmit.get('confirmPassword')?.value){
      this.FormUserOnSubmit.removeControl('confirmPassword')
      this.auth.onSubmit(this.FormUserOnSubmit.value).subscribe({
        next:(response:any)=>{
          this.toastr.success(`Olá ${response.name}`, 'seu cadastro foi realizado com successo!');
        },
        error:(error:any)=>{
          this.toastr.success('Desculpe, Houve um error durante seu cadastro', 'tente mais tarde:)');
        },
        complete:()=>{
          this.router.navigate(['login'])
          this.toastr.success("", 'seu cadastro foi realizado com successo!');
        }
      })
    }else{
      this.responseSubmit = "Senhas digitadas não são iguais";
    }
  }

  configForm(){
    this.FormUserOnSubmit = this.formBuilder.group({
      name:[ null, Validators.required],
      email:[null, Validators.email],
      password:[null, Validators.required],
      confirmPassword:[null, Validators.required],
    });
  }
}
