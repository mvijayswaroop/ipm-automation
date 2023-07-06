import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IPMModule} from 'platform-map';

import { AppComponent } from './app.component';
import { ComponentActions } from 'src/keywords/component-management.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IPMModule
  ],
  providers: [ComponentActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
