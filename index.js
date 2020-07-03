// to play sound by mouse click
var drumLen = document.querySelectorAll(".drum").length;
for(var i=0; i<drumLen; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", clicked);

function clicked(){
  var key = this.innerHTML;
  toPlayAudio (key);
  buttonPressed(key);
}
}

// to play sound by keyboard
document.addEventListener("keydown",function(event){
  // alert('key was pressed');
  // console.log (event);
  console.log (event.key);
  toPlayAudio (event.key);
  buttonPressed(event.key);
})


// function to play ssound
function toPlayAudio (key){
  switch (key) {
    case 'W':
    case 'w': var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
    return ;
    case 'A':
    case 'a': var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
    return ;
    case 'S':
    case 's': var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
    return ;
    case 'D':
    case 'd': var audio = new Audio("sounds/tom-4.mp3");
              audio.play();
    return ;
    case 'J':
    case 'j': var audio = new Audio("sounds/snare.mp3");
              audio.play();
    return ;
    case 'K':
    case 'k': var audio = new Audio("sounds/crash.mp3");
              audio.play();
    return ;
    case 'L':
    case 'l': var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
    return ;

    default:
      return;
  }

}

//function for animation

function buttonPressed (key1){
  document.querySelector('.' + key1).classList.add("pressed");
  setTimeout(function () {
    document.querySelector('.' + key1).classList.remove("pressed");
  }, 100);
}
