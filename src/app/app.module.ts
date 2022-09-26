import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputReflectionComponent } from './input-reflection/input-reflection.component';
import { PicabooComponent } from './picaboo/picaboo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputReflectionComponent,
    PicabooComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
