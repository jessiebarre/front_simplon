import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b5',
  templateUrl: './exercice-b5.component.html',
  styleUrls: ['./exercice-b5.component.css']
})
export class ExerciceB5Component implements OnInit {

  theKeyCode: number
  x: number
  y: number

  constructor() { }

  ngOnInit() {
  }

  myMethod(event: KeyboardEvent) {
    this.theKeyCode = event.keyCode;
  }

  followMouse(x: number, y: number) {
    this.x = x;
    this.y = y
  }
}
