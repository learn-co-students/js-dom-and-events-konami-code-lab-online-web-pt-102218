const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let j = 0
function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown',(e)=>{
    
    if (e.keyCode === code[j]){
      j++
      if (j === code.length) {
        alert ('wow')
      }
      
    }
    else{
      j=0
    }
  })
}