import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.css']
})
export class ExerciceB4Component implements OnInit {

  activeSection: number

  constructor() { }

  ngOnInit() {
  }

  setNum(num: number) {
     return this.activeSection = num
  }

  checkSection(activeNum: number) {
    return this.activeSection === activeNum ? true : false
  }

}
