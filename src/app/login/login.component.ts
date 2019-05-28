import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  us : User = new User();
  constructor(private _ls:LoginService) {
  }
    
  ngOnInit() {
  }

  doLogin() : void{
    
    if(!this.us.id){
      alert('아이디를 입력해주세요.');
      return;
    }
    if(!this.us.pwd){
      alert('비밀번호를 입력해주세요.');
      return;
    }   
 
    this._ls.doLogin(this.us)
    .subscribe(res=>{
      if(res.response){
        this.us = res.response;
        alert('로그인이 성공하였습니다.');
      } else {
        alert('아이디 또는 비밀번호를 확인하세요.');
      }
    });
    
  }
}
