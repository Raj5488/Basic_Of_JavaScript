const decrementbtn = document.getElementById("decrement");
const incrementbtn = document.getElementById("increment");
const resetbtn = document.getElementById("reset");
const countvalue = document.getElementById("count");
let value = 0;

decrementbtn.addEventListener("click",function(){
    value--;
    countvalue.innerText = value;
    
})
incrementbtn.addEventListener("click", function(){
    value++;
    countvalue.innerText = value;
})
resetbtn.addEventListener("click", function(){
    value=0;
    countvalue.innerText = value;
})
