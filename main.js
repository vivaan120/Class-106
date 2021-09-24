function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/V_AcuWRVL/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    console.log("Results is activated");
}
