const counter     = document.querySelector("#counter");
const increasebtn  = document.querySelector("#increasebtn");
const resetbtn     = document.querySelector("#resetbtn")
const  decreasebtn = document.querySelector("#decreasebtn");

let count = 0;
function updateCounter(){
counter.textContent= count;
}

 function upword(){
count++;
updateCounter();
 }
 
 function decrease(){
count--;
updateCounter();
 }

 function reset(){
count=0;
updateCounter();

 }
 increasebtn.addEventListener("click",upword);
resetbtn.addEventListener("click",reset);
 decreasebtn.addEventListener("click",decrease);
