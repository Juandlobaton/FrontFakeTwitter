import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/tweet';
import { TweetServicesService } from '../Services/tweet-services.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  listTweets: Array<Tweet>;


  constructor(private twitter: TweetServicesService) { }

  ngOnInit(): void  {
    this.getTweets();
  }

  public getTweets() {
    this.twitter.ShowTweets().subscribe( (res: any) => {
      this.listTweets = res.data;
      console.log(res)
    } )
    
 
  }

  
}