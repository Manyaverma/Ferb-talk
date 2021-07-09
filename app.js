var txtInput=document.querySelector("#input");
var btnTranslate=document.querySelector("#translate");
var txtOutput=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(input){
    return serverURL+"?"+"text="+input;
}

function errorHandler(error){
    console.log("this error occured",error);
   alert("something went wrong! Try again after sometime:)")

}

function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText)).then
    (response=>response.json()).then
    (json=>{
      var translatedTxt=json.contents.translated;
      txtOutput.innerHTML=translatedTxt; } )
      .catch(errorHandler)

}

btnTranslate.addEventListener("click",clickHandler)