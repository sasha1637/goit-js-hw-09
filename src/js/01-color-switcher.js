// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
//  на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону 
// повинна зупинятися.


const startBtn=document.querySelector("[data-start]");
const stoptBtn=document.querySelector("[data-stop]");
const body= document.querySelector("body");
stoptBtn.disabled = true

const DELAY=1000;
let timeID;
startBtn.addEventListener('click',onStart)
stoptBtn.addEventListener('click',onStop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function onStart(){
    startBtn.disabled = true
    stoptBtn.disabled = false

    timeID=setInterval(() => {
        body.style.backgroundColor=getRandomHexColor()
    }, DELAY);
}
function onStop(){
    clearInterval(timeID)
    startBtn.disabled = false
    stoptBtn.disabled = true

}