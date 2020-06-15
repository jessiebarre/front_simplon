import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.css']
})
export class ExerciceA5Component implements OnInit {

  classe = {
    name: 'Super promo', 
    specialty: 'Web Dev',
    members: [
      {
        firstName: 'Riri',
        lastName: 'Huey',
        age: 13
      },
      {
        firstName: 'Fifi',
        lastName: 'Dewey',
        age: 12
      },
      {
        firstName: 'Loulou',
        lastName: 'Louie',
        age: 13
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  
}
