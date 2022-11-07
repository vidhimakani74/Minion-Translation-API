// console.log("hello! script is working in new file")
 
// var username =prompt("give me ypur user name");

var btntranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")


var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am vidhi makani"

function getTranslationURL(text){
    return serverURL + "?"+ "text"+ text
}




// console.log(outputDiv);
// outputDiv.innerText="vidhi makani"
// console.log(txtInput)

btntranslate.addEventListener("click", function clickEventHandler(){
    // console.log("clicked");
    // console.log("input",txtInput.value);
    // outputDiv.innerText="asasasasaas"+ txtInput.value;
    
    var inputText=txtInput.ariaValueMax; //taking value
    fetch(getTranslationURL(inputText)) //calling server for processing
    .then(response=>response.json())
    .then(json=>console.log(json))
}) 