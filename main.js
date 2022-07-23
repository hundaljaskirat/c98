var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start() {
document.getElementById("textbox").innerHTML= "";
Recognition.start();
}
Recognition.onresult = function ( event ) {
console.log(event);
var Content = event.results[0] [0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content == "take my selfie "){
console.log ("taking your selfie");

} 

}
