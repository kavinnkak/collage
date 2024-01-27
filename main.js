function first()
{
    var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    console.log("inside start");


recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        //console.log("take my selfie --- ");
        speak();
    }
    }
    


function speak()
{
    var synth = window.speechSynthesis;

    //speak_data = "Taking you selfie in 5 seconds";

    //var utterThis = new SpeechSynthesisUtterance(speak_data);

    //synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "your selfie is below";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000 );

   
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:100
});
camera = document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';

    });
    }
}












function th()
{
    var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    console.log("inside start");


recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        //console.log("take my selfie --- ");
        speak();
    }
    }
    


function speak()
{
    var synth = window.speechSynthesis;

    //speak_data = "Taking you selfie in 5 seconds";

    //var utterThis = new SpeechSynthesisUtterance(speak_data);

    //synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
        speak_data = "your selfie is below";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000 );

   
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:100
});
camera = document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML = '<img id="selfie_image3" src="'+data_uri+'">';

    });
    }
}














function sec()
{
    var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    console.log("inside start");


recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        //console.log("take my selfie --- ");
        speak();
    }
    }
    


function speak()
{
    var synth = window.speechSynthesis;

    //speak_data = "Taking you selfie in 5 seconds";

    //var utterThis = new SpeechSynthesisUtterance(speak_data);

    //synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie 2";
        take_snapshot();
        speak_data = "your selfie is below";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000 );

   
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:100
});
camera = document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="'+data_uri+'">';

    });
    }
}


