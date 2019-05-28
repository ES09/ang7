import { Component, OnInit } from '@angular/core';
import { CastExpr } from '@angular/compiler';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  title:string = 'Hello Cat';
  cats:any[] = [];

  constructor() { 
    for(var i=1;i<=10;i++){
      var cat = {name:'고양이'+i, age:i};
      this.cats.push(cat);
    }
  }
  
  clickCat(cat):void{
    alert('클릭하신 고양이의 이름은 ' + cat.name);
  }
  ngOnInit() {
  }

}
