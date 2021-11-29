import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';import { Validator } from 'src/app/shared/validator_token';
;

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
    private validator: Validator,
    private router:Router,
    private formBuilder:FormBuilder,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    if(this.authService.getAuthorizedToken() && this.validator.verifyToken(this.authService.getAuthorizedToken())){
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
    this.authService.login(this.FromUserLogin.value).subscribe({
      next:(data:any) => {
        this.authService.saveToken(data.token);
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
