import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AccountService } from 'src/app/account/AccountService.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { Validator } from 'src/app/shared/validator_token';
import { User } from 'src/app/models/user.md';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public title="";
  user: any ;

  constructor(
    private spinner: NgxSpinnerService,
    private account: AccountService,
    private auth: AuthService,
    private router: Router,
    private validate: Validator
    ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      if (this.validate.verifyToken(this.auth.getAuthorizedToken())){
        this.account.getUser().subscribe(data => {
          this.user = data;
        });
      }else{
        console.log("token invalido")
      }   
    },1000);
  }
  
}
