// console.log("hello! script is working in new file")
 
// var username =prompt("give me ypur user name");

var btntranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
console.log(txtInput)
btntranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
}) 