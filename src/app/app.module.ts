import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    LoginComponent,
    JoinComponent,
    MenuComponent,
    BoardComponent,
    InsertComponent,
    ViewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
