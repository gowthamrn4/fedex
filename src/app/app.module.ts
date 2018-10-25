import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'',pathMatch:'full',redirectTo:'home' },
      { path:'home',component:HomeComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
