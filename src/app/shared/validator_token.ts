import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class Validator{
    constructor(private auth: AuthService, private http:HttpClient){}

    verifyToken(token:any){
        var responseToken;  
        this.auth.verifyToken(token).subscribe((response:any) => responseToken = response["token"])
        console.log(responseToken)
        return true
    }
}