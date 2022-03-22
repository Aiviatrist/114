function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded());
    posenet.on("pose",gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function modelloaded(){
    console.log("moddel is loaded")
}
function draw(){
    Image(video,0,0,300,300);
}
function pic(){
    save("filterpic.png");
}