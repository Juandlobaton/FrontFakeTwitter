import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tweet } from '../model/tweet';

export interface TwitterResponse {
  data: any;
  resp: any;

}

@Injectable({
  providedIn: 'root'
})

export class TweetServicesService {

  constructor(private http: HttpClient) { }

  
  ShowTweets() {
    return this.http.get(`${environment.api}/posts`);
  }

  saveTweets(Twt: Tweet) {
    return this.http.post(`${environment.api}/posts`, Twt);
  }



  
}

