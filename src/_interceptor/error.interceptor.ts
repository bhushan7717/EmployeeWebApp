import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).
    pipe(retry(1), 
    catchError((error : HttpErrorResponse) => {

      let errorMsg = '';
      if(error.error instanceof ErrorEvent)
        errorMsg = `Error : ${error.error.message}`;
      else
        errorMsg = `Error status code ${error.status} \n Message ${error.message}`;

          console.log(errorMsg);

      return throwError(() => new Error(errorMsg));
    }))
  }
}
