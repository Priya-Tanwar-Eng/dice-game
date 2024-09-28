let button = document.getElementById("btn");
 button.addEventListener("click", ()=>{
let p1 = Math.floor(Math.random()*6)+1;
let p2 = Math.floor(Math.random()*6)+1;
console.log("good");
    document.getElementById("p1").src=`text${p1}.jfif`;
    document.getElementById("p2").src=`text${p2}.jfif`;
    songs();
    if(p1>p2){
        document.querySelector("h1").innerHTML="player 1 is winner";
    }
    else if(p2>p1){
        document.querySelector("h1").innerHTML="player 2 is winner";
    }
    else{
        document.querySelector("h1").innerHTML="Oops drow";
    }
});
function songs(){
    const audio = new Audio();
    audio.src = "tone.mp3";
    audio.play()
}
