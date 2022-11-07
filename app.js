// console.log("hello! script is working in new file")

// var username =prompt("give me ypur user name");

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am vidhi makani"

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverUrl + "?" + "text=" + input;
}

// console.log(outputDiv);
// outputDiv.innerText="vidhi makani"
// console.log(txtInput)
function errorHandler(error) {
  console.log("error occured", error);
  alert("somthing wrong with server! try again after some time");
}
// btntranslate.addEventListener("click", function clickEventHandler{
// console.log("clicked");   z
// console.log("input",txtInput.value);
// outputDiv.innerText="asasasasaas"+ txtInput.value;

function clickHandler() {
  var inputText = txtInput.value; //taking value

  fetch(getTranslationURL(inputText)) //calling server for processing
    .then((response) => response.json())
    //.then(json=>//console.log(json.contents.translated))
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btntranslate.addEventListener("click", clickHandler);
