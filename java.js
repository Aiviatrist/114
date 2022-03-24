function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded());
    posenet.on("pose",gotPoses);

}
nose_x="";
nose_y="";
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(img,nose_x-50,nose_y-20,100,70);
}
function pic(){
    save("filterpic.png");
}
function preload(){
    img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}