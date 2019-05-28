import { Injectable } from '@angular/core';
import { Board } from './board';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl:string = 'http://localhost:88/';
  
  constructor() { }
  
  getBoardInfoService(board:Board){
    return ajax.get(this.baseUrl +'boardinfos');   
  }

  setBoardContent(board:Board){
    return ajax.post(this.baseUrl +'boardinfos',board,
    {'Content-Type':'application/json',
    'rxjs-custom-header':'Rxjs'});

  }

  getBoardInfo(biNum:number){
    return ajax.get(this.baseUrl +'boardinfo?biNum=' + biNum);   
  }
}