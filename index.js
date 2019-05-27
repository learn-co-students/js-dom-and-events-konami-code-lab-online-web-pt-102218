// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// let index = 0

// function init() {
//   // Write your JavaScript code inside the init() function
//   // This is the function that would be invoked by the event listener.
//   function onKeyDownHandler(e) {
//     const key = parseInt(e.detail || e.which);
  
//     if (key === alphabet[index]) {
//       index++;
  
//       if (index === alphabet.length) {
//         alert("Hurray!");
  
//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   }
// }


const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var values = {
  "ArrowUp": 38,
  "ArrowDown": 40,
  "ArrowLeft": 37,
  "ArrowRight": 39,
  "a": 65,
  "b": 66
}

function init() {
  // your code here
  body = document.querySelector('body')
 
  let index = 0;
  body.addEventListener('keydown', function(e) {
    if(values[codes[index]] === e.which){
      index++;
      
      if(index === codes.length){
        alert("You did it!!");
        index = 0;
      }
    }
    else{
      index = 0;
    }
  });
}

init();