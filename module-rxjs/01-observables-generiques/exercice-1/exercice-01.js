import { Observable, fromEvent } from "rxjs";

let target = document.body;
let keyDiv = document.getElementById("code");

let observer = {
  next: (event) => {
    console.log(event.keyCode);
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
      case 13:
    }
  },
  error: (err) => console.log(err),
  complete: (event) => {
    if (event.keyCode === 13) {
      console.log("stop");
    }
  },
};

fromEvent(target, "keydown").subscribe(observer);
