import { AuthService } from './../shared/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../shared/loader.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    public loaderService: LoaderService,
    public auth: AuthService
    ){}


 intercept( request: HttpRequest<any>, next: HttpHandler ):
 Observable<HttpEvent<any>> {
   const token = this.auth.getAuthorizedToken();
   if (token){
     request = request.clone({
       headers: request.headers.set('Authorization', `Bearer ${token}`)
     });
   }
   this.loaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(
        ()=> {
          this.loaderService.isLoading.next(false);
        }
      )
    );
 }
}
