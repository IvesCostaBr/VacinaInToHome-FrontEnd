import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../models/user.md';
import { windowWhen } from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  validAcess(user:any){
    const body = {email: user.email, password: user.password};
    return this.http.post(`${environment.api}auth/token/`,body);
  }

  refreshToken(){
    const token = window.sessionStorage.getItem("refresh");
    const body = {refreshToken: token};
    return this.http.post(`${environment.api}/auth/token/refresh`, body);
  }

  getAuthorizedToken(){
    const token = window.sessionStorage.getItem("token");
    return token
  }

  saveToken(data: any){
    if ( data.access || data.refresh  ){
      const tokens = { accessToken:data.access, refreshToken:data.refresh }
      window.sessionStorage.clear();
      window.sessionStorage.setItem("token",JSON.stringify(tokens))
    }
  }

  onSubmit(user:any): Observable<any>{
    const body = user;
    return this.http.post(`${environment.api}/employees/`, body)
  }

  logout(){
    window.sessionStorage.clear();
  }
}
