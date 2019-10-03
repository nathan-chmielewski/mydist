import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MessagesService } from './messages.service';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyServiceService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
