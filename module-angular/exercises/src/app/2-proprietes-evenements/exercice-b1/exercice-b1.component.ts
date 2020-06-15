import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.css']
})
export class ExerciceB1Component implements OnInit {

  myPicture: string = 'https://i.pinimg.com/236x/5c/c9/d7/5cc9d7ca665fb85ef6c956e918fcd42b--border-terrier-twitter.jpg'

  myTurtles = [
    'https://cdn130.picsart.com/317741409524201.jpg?type=webp&to=crop&r=256',
    'https://pbs.twimg.com/profile_images/2879265328/93e280bbad04bf865c3d3ac1730e8a41.jpeg',
    'https://pbs.twimg.com/profile_images/669892448450138112/x5wleZqK_400x400.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
