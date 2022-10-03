import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputReflectionComponent } from './input-reflection/input-reflection.component';
import { PicabooComponent } from './picaboo/picaboo.component';
import { InputDummyComponent } from './input-dummy/input-dummy.component';
import { ClassWorkComponent } from './class-work/class-work.component';

@NgModule({
  declarations: [
    AppComponent,
    InputReflectionComponent,
    PicabooComponent,
    InputDummyComponent,
    ClassWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
