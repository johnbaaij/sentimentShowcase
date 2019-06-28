import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BubbleRightComponent } from './bubble-right/bubble-right.component';
import { BubbleLeftComponent } from './bubble-left/bubble-left.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BubbleRightComponent,
    BubbleLeftComponent,
    ChatAreaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
