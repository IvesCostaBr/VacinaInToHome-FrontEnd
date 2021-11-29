import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../models/user.md';
import { windowWhen } from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user:any){
    const body = {email: user.email, password: user.password};
    return this.http.post(`${environment.api}authentication/login/`,body);
  }

  verifyToken(token:string){
    const body = {token: token};
    return this.http.post(`${environment.api}authentication/verify/`, body);
  }

  getAuthorizedToken(){
    const token = window.sessionStorage.getItem("token");
    return token
  }

  saveToken(token: string){
    if ( this.getAuthorizedToken() ){
      window.sessionStorage.removeItem("token")
    }
    window.sessionStorage.clear();
    window.sessionStorage.setItem("token",token)  
  }

  removeTokenSession(){
    window.sessionStorage.removeItem("token")
  }


  logout(){
    window.sessionStorage.clear();
  }
}
