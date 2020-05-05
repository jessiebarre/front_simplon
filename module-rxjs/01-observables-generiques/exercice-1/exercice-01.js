import { Observable, fromEvent } from "rxjs";

let keyDiv = document.getElementById("code");

window.addEventListener("DOMContentLoaded", (event) => {
  const obs = new Observable((observer) => {
    window.addEventListener("keydown", (event) => {
      observer.next(event);
      if (event.keyCode === 13) {
        observer.complete;
      }
    });
  });

  obs.subscribe({
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
