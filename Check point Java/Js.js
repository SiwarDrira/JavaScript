var bold = document.getElementById("bold"); 
var italic = document.getElementById ("italic"); 
var underlined = document.getElementById('underlined');
var fontcolor = document.getElementById('fontcolor');
var size = document.getElementById('size');
var family = document.getElementById('family'); 
var text = document.getElementById('textBox'); 


bold.addEventListener("click" , function(Bold1){
    text.classList.toggle("strongtext");
})
italic.addEventListener("click", function(italic1){
    text.classList.toggle("italictext");
})
underlined.addEventListener("click", function(underlined1) {
    text.classList.toggle("underlinedtext");
})
fontcolor.addEventListener("change" , function(color1) { 
    text.style.color = event.target.value;
})
size.addEventListener ("change" , function(size1) { 
    text.style.fontSize = event.target.value + "px";
})
family.addEventListener("change" , function(family1) {
    text.style.fontFamily = event.target.value ;
})
