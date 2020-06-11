import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})
export class ExerciceA3Component implements OnInit {

  number1: number;
  number2: number;
  arrayString: string[]

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    return 'Bonjour';
  }

  divideNumbers(number1, number2) {
    return number2 / number1;
  }

  concateneString(arrayString) {
    let bigString: string = ''
    for (let i = 0; i < arrayString.length; i++) {
      console.log(arrayString[i])
      bigString += arrayString[i] + ' '
    }
    return bigString
  }
}
