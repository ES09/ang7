import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  board : Board = new Board();

  constructor(private _biInsert:BoardService) { }

  ngOnInit() {
  }

  save():void{
    if(!this.board.biTitle){
      alert('제목을 입력해주세요.');
      return;
    }
    if(!this.board.biContent){
      alert('내용을 입력해주세요.');
      return;
    }
    if(!this.board.biWriter){
      alert('작성자를 입력해주세요.');
      return;
    }
    this._biInsert.setBoardContent(this.board).subscribe(res=>{
      if(res.response){
        this._biInsert = res.response;
        alert('게시물이 등록되었습니다.');
        window.location.href = 'http://localhost/board'
      } else {
        alert('입력 값을 확인해주세요.');
      }
    })
  }

}
