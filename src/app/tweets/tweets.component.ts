import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Tweet } from '../model/tweet';
import { TweetServicesService } from '../Services/tweet-services.service';


@Component({
  selector: 'dialog-content-tweet-dialog',
  templateUrl: 'dialog-component.component.html'
})
export class dialogContentTweet {
  
  public dialogRef: MatDialogRef<dialogContentTweet>;
  @Inject(Tweet)
  public data: Tweet  = new Tweet();
  constructor()
    { }

  onNoClick(): void  {
    this.dialogRef.close();
  };
};




@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  listTweets: Array<Tweet>;
  newTweet: Tweet;
  message = '';

  constructor(private twitter: TweetServicesService,
                      private dialog: MatDialog) { }

                    
  ngOnInit(): void  {
    this.getTweets();
  };


  public openNewTweet(){
    const dialogRef = this.dialog.open(dialogContentTweet, {
      data: {idUser:1, message: '', published_date: ''}
   }) ;
  dialogRef.afterClosed().subscribe(result => {
   this.message = result;
   this.crearTweet(this.message);        
  });
  };

  public getTweets() {
    this.twitter.ShowTweets().subscribe( (res: any) => {
      this.listTweets = res.data;
      console.log(res)
    } )      
   };

   public NewTweetDialog() {
     const dialogRef = this.dialog.open(dialogContentTweet, {
        data: {idUser:1, message: '', published_date: ''}
     }) ;
    dialogRef.afterClosed().subscribe(result => {
     this.message = result;
     this.crearTweet(this.message);        
    });
    };


    public  crearTweet(message){
      this.newTweet = new Tweet();
      this.newTweet.message = message;
      this.newTweet.idUser = 1;
      this.newTweet.published_date = new Date().toLocaleString().substring(0, 10);
      this.twitter.saveTweets(this.newTweet).subscribe((res: any) => {
        console.log(res);
        this.listTweets;
      })
    };
}