const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  document.body.addEventListener('keydown', kanomi_listener);
}

function kanomi_listener(e) {
  if (parseInt(e.detail || e.which) == codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0
  }
}

init();
