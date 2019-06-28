import {Component, Input, OnInit} from '@angular/core';
import {Sentiment} from "../sentiment";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-bubble-left',
  templateUrl: './bubble-left.component.html',
  styleUrls: ['./bubble-left.component.scss']
})

/*
* This component is a direct copy from the main Angular project and it's being used to show the sentiment
* chat messages on the screen
 */
export class BubbleLeftComponent implements OnInit {

  @Input() message2: string;


  constructor() { }

  ngOnInit() {

    //this.apiService.getSentiment().subscribe(data => this.message= data.responseMessage);





  }

}
