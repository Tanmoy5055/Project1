import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setData(email:string, full_name:string, token:string, user_id:string){
    window.localStorage.setItem('email',email);
    window.localStorage.setItem('full_name',full_name);
    window.localStorage.setItem('token',token);
    window.localStorage.setItem('user_id',user_id);
  }

  getData(){
    const allData=[];

    allData.push( 
    window.localStorage.getItem('email'),
    window.localStorage.getItem('full_name'),
    window.localStorage.getItem('user_id'))
    return allData;
  }
  destroyToken(){
    window.localStorage.clear();
  }
  constructor() { }
}
