let keyDiv = document.getElementById("code");

/**************** PART 1 ********************/
/****************************************** 
import { Observable } from "rxjs";


window.addEventListener("DOMContentLoaded", (event) => {
  const myObservable$ = new Observable((observer) => {
    window.addEventListener("keydown", (event) => {
      observer.next(event);
      if (event.keyCode === 13) {
        observer.complete;
      }
    });
  });

  myObservable$.subscribe({
    next(value) {
      switch (value.keyCode) {
        case 38:
          keyDiv.innerHTML = "&#8593;";
          break;
        case 40:
          keyDiv.innerHTML = "&#8595;";
          break;
        case 37:
          keyDiv.innerHTML = "&#8592;";
          break;
        case 39:
          keyDiv.innerHTML = "&#8594;";
          break;
      }
    },
    complete() {
      keyDiv.innerHTML = "done";
    },
  });
});*/

/***************************PART 2 **********************/

import { Subject } from "rxjs";

window.addEventListener("DOMContentLoaded", (event) => {
  const mySubject$ = new Subject();
  mySubject$.subscribe({
    next(value) {
      switch (value.keyCode) {
        case 38:
          keyDiv.innerHTML = "&#8593;";
          break;
        case 40:
          keyDiv.innerHTML = "&#8595;";
          break;
        case 37:
          keyDiv.innerHTML = "&#8592;";
          break;
        case 39:
          keyDiv.innerHTML = "&#8594;";
          break;
      }
    },
    complete() {
      keyDiv.innerHTML = "done";
    },
  });
});
