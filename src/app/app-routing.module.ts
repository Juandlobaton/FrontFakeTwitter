import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';
import { dialogContentTweet } from './tweets/tweets.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


const rutas: Routes = [
      {path: '', component:TweetsComponent } ,
      {path: 'CrearTweet', component: dialogContentTweet } 

]


@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
