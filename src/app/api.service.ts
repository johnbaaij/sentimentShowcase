import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sentiment} from "./sentiment";
import {interval} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  /*
    * This class is being used to connect this page to our api and get a random object from the DB. This object contains
    * the input message, the response message and the sentiment score. All three elements are being used to generate the
    * elements on this page
 */
  url = 'http://arena.dss.cloud:3000/messages/single';

  constructor(private _http: HttpClient) {
    interval(1000).subscribe(x => {
      console.log("interfall");
      this.getSentiment();
    });
  }

  public getSentiment(){
    return this._http.get<Sentiment>(this.url);
  }
}
