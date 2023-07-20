//https://teachablemachine.withgoogle.com/models/pnHrnb8yt/model.json
prediction1="";
prediction2="";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
});
};
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8hgao3-za/model.json", model_loaded);
function model_loaded() {
console.log("Model is Loaded")
};
function speak() {
synth=window.speechSynthesis;
speakdata1="The First Prediction is " + prediction_1
speakdata2="The Second Prediction is " + prediction_2
utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterthis)
};