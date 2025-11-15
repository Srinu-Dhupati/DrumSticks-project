
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("hello");
// });



//this is for sounding when you click the image
var noofButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<noofButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
     
    var buttoninnerHTML = this.innerHTML;
     makeSound(buttoninnerHTML);
     buttonKey(buttoninnerHTML);


        
    });
}


//this is for when press the keys in key board
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonKey(event.key);
});

//this is to allocate sound 
function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snar = new Audio("sounds/snare.mp3");
            snar.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

     
        default:console.log(buttoninnerHTML);
     }


}


function buttonKey(currentKey){
    var activebutton =document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
        
    }, 100);
}






