import {Component, Input, OnInit} from '@angular/core';
import {Sentiment} from "../sentiment";
import {ApiService} from "../api.service";
import {interval, Subscription} from "rxjs";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  /*
    * This component wraps both chatbubbles and gives them the right message from the api
    * The sentiment score is also retrieved
    * The score is being used to change the face of Jax
 */

  message: string;
  message2: string;

  private updateSubscription: Subscription;





  constructor(private apiService: ApiService , private appComponent: AppComponent) {


  }

  ngOnInit() {


    // this will be called once to make sure the first value isn't empty and something is always shown.
    //Without this function the bubbles would be empty and the basic image will be shown
    this.apiService.getSentiment().subscribe(data => {
      this.message2 = data.responseMessage;
      this.message = data.inputMessage;
      this.updateStats();
    });


    //this function will be called every 30 seconds to update both bubbles and the corresponding image
      this.updateSubscription = interval(1000 *30).subscribe(
        (val) => { this.apiService.getSentiment().subscribe(data => {
          this.message2 = data.responseMessage;
          this.message = data.inputMessage;
          this.sentimentCalculator(data.sentimentScore *10 );

          this.updateStats();
        })


    });



  }


  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  private updateStats() {
    console.log('I am doing something every second');
  }


  //this function decides which image has to be shown based on the sentiment score
  //it calls a function in the app component to change the face of Jax
  private sentimentCalculator(sentiment){



    if (sentiment < 0.3){
      this.appComponent.updateImage(2);


    }

    else if (sentiment > 3 && sentiment < 7){
      this.appComponent.updateImage(3);


    }

    else {
      this.appComponent.updateImage(1);
    }








  }

}
