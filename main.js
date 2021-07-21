prediction1="";
prediction2="";

Webcam.set({
    width: 350,
    height: 300,
    Image_format:'png',
    png_quality: 90

});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snap(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src=' "+data_uri+"'>";
    });
    
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J070V2LsK/model.json',modelloaded);
function modelloaded (){
    console.log("Model Loaded");
}




function check(){
    var img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}

function gotResult(error,result){
    if (error){
        console.error(error);
    }

    else{
        console.log(result);
        prediction1=result[0].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;



        if (prediction1=="Rock on"){
            document.getElementById("update_emoji").innerHTML="&#129304;";
        }

        if (prediction1=="Awsome"){
            document.getElementById("update_emoji").innerHTML="&#128076";
        }

        if (prediction1=="Pointing"){
            document.getElementById("update_emoji").innerHTML="&#128070;";
        }

        if (prediction1=="Palm"){
            document.getElementById("update_emoji").innerHTML="&#9995;";
        }

        if (prediction1=="Clap"){
            document.getElementById("update_emoji").innerHTML="&#128075;";
        }

        if (prediction1=="Thumb up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }

        if (prediction1=="Thumb down"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }

        if (prediction1=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        
        
        
    }
}