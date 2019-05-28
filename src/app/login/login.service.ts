import { Injectable } from '@angular/core';
import { User } from './user';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string = 'http://localhost:88/';

  constructor() { }

  doLogin(us:User) {
    return ajax.post(this.baseUrl + 'login',
              {'uiId':us.id,'uiPwd':us.pwd},
              {'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
                   
  }
}
