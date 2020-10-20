import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*Services*/

import { TweetServicesService } from './Services/tweet-services.service';

/*Component*/

import { TweetsComponent } from './tweets/tweets.component';
import { MenuComponent } from './menu/menu.component';
import { dialogContentTweet } from './tweets/tweets.component';

/*Angular Material*/

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 



@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    MenuComponent,
    ButtonComponent,
    dialogContentTweet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [TweetServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
