import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth.service';
import { User } from 'src/app/models/user.md';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http:HttpClient, private auth:AuthService) { }

  onSubmit(user:any): Observable<any>{
    const body = user;
    return this.http.post(`${environment.api}/users/create/`, body)
  }

  getUser(): Observable<User>{
    var token = this.auth.getAuthorizedToken()
    const header = {Authorization:`Bearer ${token}`};
    return this.http.get<User>(`${environment.api}users/get-user_by_token`, {headers:header})
  }
}
