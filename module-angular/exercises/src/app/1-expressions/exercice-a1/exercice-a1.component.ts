import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a1',
  templateUrl: './exercice-a1.component.html',
  styleUrls: ['./exercice-a1.component.css']
})
export class ExerciceA1Component implements OnInit {

  x: number = 4;
  y: number = 19;
  constructor() { }

  ngOnInit() {
  }

}
