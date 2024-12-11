for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        soundOfDrums(this.innerHTML.toLowerCase());
    })
}
document.addEventListener("keypress",function(event){
    soundOfDrums(event.key.toLowerCase());
})
function blink(word){
    document.querySelector("."+word.toLowerCase()).classList.add("flash");
    setTimeout(function(){
        document.querySelector("."+word.toLowerCase()).classList.remove("flash");
    },200);
}
function soundOfDrums(word){
    switch(word){
        case "d":
            var audio=new Audio("./musics/crash.mp3");
            audio.play();
            blink(word);
            break;
        case "f":
            var audio=new Audio("./musics/kick-bass.mp3");
            audio.play();
            blink(word);
            break;
        case "g":
            var audio=new Audio("./musics/snare.mp3");
            audio.play();
            blink(word);
            break;
        case "h":
            var audio=new Audio("./musics/tom-1.mp3");
            audio.play();
            blink(word);
            break;
        case "j":
            var audio=new Audio("./musics/tom-2.mp3");
            audio.play();
            blink(word);
            break;
        case "k":
            var audio=new Audio("./musics/tom-3.mp3");
            audio.play();
            blink(word);
            break;
        case "l":
            var audio=new Audio("./musics/tom-4.mp3");
            audio.play();
            blink(word);
            break;
        default:
            alert(word);
    }
}