song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;


function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video,modelLoaded);
    pose.on('pose',gotPoses);
}


function draw(){
    image(video,0,0,600,450);
}


function preload(){
    song=loadSong("music.mp3");
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function modelLoaded(){
    console.log('model is initialised');
}


function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftwristX= results[0].pose.leftWrist.x;
        leftwristY= results[0].pose.leftWrist.y;
        rightwristX= results[0].pose.rightWrist.x;
        rightwristY= results[0].pose.rightWrist.y;
        console.log(leftwristX, leftwristY, rightwristX, rightwristY);
    }
    

}