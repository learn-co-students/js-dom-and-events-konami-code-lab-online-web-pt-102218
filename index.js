const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  function detectKCMaker() {
    let i = 0;
    return function(key) {
      console.log(key.which)
      if (code[i] === key.which) { // if the next key was pressed, advance the sequence
        ++i
        if (i === 10) {
          alert("Code received");
          i = 0;
        }
      } else {
        // reset the sequence
        i = 0;
      }
    }
  }
  let detectKC = detectKCMaker();
  document.body.addEventListener('keydown', detectKC);
  console.log('ready')
}