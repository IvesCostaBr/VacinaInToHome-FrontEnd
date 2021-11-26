import { User } from './../../models/user.md';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public title="";
  public user: User = {};
  constructor(
    private spinner: NgxSpinnerService,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    },1000);
  }

}
