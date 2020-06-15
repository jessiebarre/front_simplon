import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a8',
  templateUrl: './exercice-a8.component.html',
  styleUrls: ['./exercice-a8.component.css']
})
export class ExerciceA8Component implements OnInit {

  cars = [
    {
      model: 'captur',
      power: '114kw',
      price: 20000,
      date: new Date('September 2, 2012 08:24:00')
    },
    {
      model: 'clio',
      power: '103kw',
      price: 15000,
      date: new Date('May 27, 2016 05:44:00')
    },
    {
      model: 'twingo',
      power: '68kw',
      price: 13000,
      date: new Date('December 10, 2017 10:37:00')
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
