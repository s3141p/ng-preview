import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WidgetModule } from '@devkit/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
