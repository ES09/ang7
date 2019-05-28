import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';

const routes: Routes = [
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'board',
    component : BoardComponent
  },
  {
    path:'insert',
    component : InsertComponent
  }, 
  {
    path:'view/:biNum',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
