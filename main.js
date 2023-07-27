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
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pnHrnb8yt/model.json", model_loaded);
function model_loaded() {
console.log("Model is Loaded")
}
function speak() {
synth=window.speechSynthesis;
speakdata1="The First Prediction is " + prediction_1
speakdata2="The Second Prediction is " + prediction_2
utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterthis)
}
function check() {
    img=document.getElementById("captured_img");
    classifier.classify(img, gotresult);
}
function gotresult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        prediction_1=results[0].label
        prediction_2=results[1].label
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        speak();
        if(results[0].label=="Ok"){
        document.getElementById("update_emoji1").innerHTML="&#128076";
        }
        if(results[0].label=="Thumbs Up"){
            document.getElementById("update_emoji1").innerHTML="&#128077";
            }
            if(results[0].label=="Peace"){
                document.getElementById("update_emoji1").innerHTML="&#9996";
                }
                if(results[1].label=="OK"){
                    document.getElementById("update_emoji2").innerHTML="&#128076";
                    }
                    if(results[1].label=="Thumbs Up"){
                        document.getElementById("update_emoji2").innerHTML="&#128077";
                        }
                        if(results[1].label=="Peace"){
                            document.getElementById("update_emoji2").innerHTML="&#9996";
                            }
    }
}