let text=document.getElementById("text");
let play=document.getElementById("play");
let range=document.getElementById("range");

play.addEventListener('click',()=>{
    max(text.value)
})

function max(talk) {
    let speech=new SpeechSynthesisUtterance(talk)
    speechSynthesis.speak(speech)
    speech.rate=range.value
}