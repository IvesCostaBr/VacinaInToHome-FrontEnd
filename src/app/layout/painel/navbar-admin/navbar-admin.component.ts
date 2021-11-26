import { AuthService } from '../../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.md';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader.service';


@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {


  user: User = {
    name:"ives costa"
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    public loaderService: LoaderService
    ) { }

  // tslint:disable-next-line:no-empty
  ngOnInit() {
  }


  logout(){
    this.auth.logout(),
    this.router.navigate([''])
  }
}
