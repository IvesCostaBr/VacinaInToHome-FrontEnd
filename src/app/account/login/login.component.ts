import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.md';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ListCompanys: any = [];

  modalRef?: BsModalRef;
  response=false;

  FromUserLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  @ViewChild('template') myTestDiv!: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private router:Router,
    private formBuilder:FormBuilder,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const token = window.sessionStorage.getItem("token");
    const acessToken = JSON.parse(token || '')

    if(String(acessToken).length > 2){
      this.router.navigate(['painel'])
    }
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.FromUserLogin = this.formBuilder.group({
      email:[null, Validators.email],
      password:[null, Validators.required]
    });
  }

  login():void{
    this.authService.validAcess(this.FromUserLogin.value).subscribe({
      next:(data:any) => {
        this.authService.saveToken(data);
        // this.openModal(this.myTestDiv)
      },
      error:(error:any) => {
        this.response=true
      },
      complete:()=>{
        this.router.navigate(['/painel'])
      }
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
