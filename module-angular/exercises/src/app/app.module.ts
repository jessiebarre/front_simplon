import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExerciceA0Component } from './1-expressions/exercice-a0/exercice-a0.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA0Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
