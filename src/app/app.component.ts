import {Component, OnInit} from '@angular/core';
import { Sentiment } from "./sentiment";

import {ApiService} from "./api.service";
import {PartialObserver} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  /*
    * This is the main component of this application.
 */

  imageSource : string;

  constructor( ){
    //this makes sure there is always an image present.
    this.imageSource = this.updateImage(3);

  }



  //This function is being used to update the image based on the sentiment score
  public  updateImage(number){

    switch (number) {

      case 1:

        //happy
        return this.imageSource ="../assets/img/Jax%20(2)-07.svg";
      case 2:
        //mad
        return this.imageSource ="../assets/img/Jax%20(2)-09.svg";
      case 3:
        //neutral
        return this.imageSource ="../assets/img/Jax%20(2)-11.svg";
    }
  }

  ngOnInit(){



  }

  title = 'Sentiment';

  private data: PartialObserver<Sentiment>;








}
