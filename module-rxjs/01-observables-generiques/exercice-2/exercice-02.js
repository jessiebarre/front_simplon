let keyDiv = document.getElementById("code");

/**************** PART 1 ********************/
/****************************************** 
import { ReplaySubject } from 'rxjs';

window.addEventListener("DOMContentLoader", () => {

  const myReplaySubject$ = new ReplaySubject();
  replaySubject$.subscribe({
    next: (value) => {
      switch (value.keyCode) {
        case 38:
          keyDiv.innerHTML += "&#8593;";
          break;
        case 40:
          keyDiv.innerHTML += "&#8595;";
          break;
        case 37:
          keyDiv.innerHTML += "&#8592;";
          break;
        case 39:
          keyDiv.innerHTML += "&#8594;";
          break;
      }
    },
    complete() {
      keyDiv.innerHTML = "done";
    }
  })

  window.addEventListener("keydown", (event) => {
    myReplaySubject$.next(event);
    if (event.keyCode === 13) {
      myReplaySubject$.complete();
    }
  })

  window.addEventListener("click", () => {
    myReplaySubject$.subscribe({
      next: (value) => {
        switch (value.keyCode) {
          case 38:
            keyDiv.innerHTML += "&#8593;";
            break;
          case 40:
            keyDiv.innerHTML += "&#8595;";
            break;
          case 37:
            keyDiv.innerHTML += "&#8592;";
            break;
          case 39:
            keyDiv.innerHTML += "&#8594;";
            break;
        }
      },
      complete() {
        keyDiv.innerHTML = "done";
      }
    })
  })

})*/