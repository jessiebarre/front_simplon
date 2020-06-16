import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b7',
  templateUrl: './exercice-b7.component.html',
  styleUrls: ['./exercice-b7.component.css']
})
export class ExerciceB7Component implements OnInit {

  myArray = [
    {
      width: 100,
      height: 100,
      backgroundColor: 'red'
    },
    {
      width: 50,
      height: 50,
      backgroundColor: 'green'
    },
    {
      width: 150,
      height: 150,
      backgroundColor: 'blue'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeWidth(index: number) {
    this.myArray[index].width += 30;
  }

}
