import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.css']
})
export class ExerciceB3Component implements OnInit {

  myNumber: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  numberPlay() {

   if (this.myNumber === 10) {
      this.myNumber --;
    } else if (this.myNumber <= 10) {
      this.myNumber ++;
    }
  } 
}
