import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ExerciceA0Component } from './1-expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './1-expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './1-expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './1-expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './1-expressions/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './1-expressions/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './1-expressions/exercice-a6/exercice-a6.component';
import { ExerciceA7Component } from './1-expressions/exercice-a7/exercice-a7.component';
import { ExerciceA8Component } from './1-expressions/exercice-a8/exercice-a8.component';
import { ExerciceB1Component } from './2-proprietes-evenements/exercice-b1/exercice-b1.component';
import { ExerciceB2Component } from './2-proprietes-evenements/exercice-b2/exercice-b2.component';
import { ExerciceB3Component } from './2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { ExerciceB4Component } from './2-proprietes-evenements/exercice-b4/exercice-b4.component';
import { ExerciceB5Component } from './2-proprietes-evenements/exercice-b5/exercice-b5.component';
import { ExerciceB6Component } from './2-proprietes-evenements/exercice-b6/exercice-b6.component';
import { ExerciceB7Component } from './2-proprietes-evenements/exercice-b7/exercice-b7.component';
import { ExerciceC1Component } from './3-formulaires/exercice-c1/exercice-c1.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    ExerciceA7Component,
    ExerciceA8Component,
    ExerciceB1Component,
    ExerciceB2Component,
    ExerciceB3Component,
    ExerciceB4Component,
    ExerciceB5Component,
    ExerciceB6Component,
    ExerciceB7Component,
    ExerciceC1Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
