import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginclass, Signupclass } from './logclass';
import { Observable } from "rxjs";
import { HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConctService {
  api_url="https://api09.herokuapp.com/login";
  api_path="https://api09.herokuapp.com/register";


  constructor(private http:HttpClient) { }
  postData(comp):Observable<Loginclass[]>{
    return this.http.post<Loginclass[]>(this.api_url,comp)
    .pipe(catchError(this.errorHandler));
    
  }
  postValue(post):Observable<Signupclass[]>{
      return this.http.post<Signupclass[]>(this.api_path,post)
          .pipe(catchError(this.errorHandler));

    }

    errorHandler(error:HttpErrorResponse){
      return throwError(error)
      
    }
}

