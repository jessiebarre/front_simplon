import { Observable, fromEvent } from "rxjs";

let target = document.body;
let keyDiv = document.getElementById("code");

let keyEvent$ = fromEvent(target, "keydown");

let keyEventSubscription = keyEvent$.subscribe(
      event => {
        switch (event.keyCode) {
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
    })   ;
  
fromEvent(target, "keydown")
.subscribe(
  event => {
    if (event.keyCode === 13) {
      keyEventSubscription.unsubscribe()
    }
  }

)
