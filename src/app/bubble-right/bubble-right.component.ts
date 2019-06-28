import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-bubble-right',
  templateUrl: './bubble-right.component.html',
  styleUrls: ['./bubble-right.component.scss']
})
export class BubbleRightComponent implements OnInit {

  /*
* This component is a direct copy from the main Angular project and it's being used to show the sentiment
* chat messages on the screen
 */

  @Input() message: string;



  constructor() { }

  ngOnInit() {
    //this.apiService.getSentiment().subscribe(data => this.message= data.responseMessage);



  }

}
