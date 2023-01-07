var nosex = 0;
var nosey = 0;


function preload() {
    nose_image=loadImage("https://i.postimg.cc/13LBvvY2/nose-removebg-preview.png");

}
function setup() {
    canvas = createCanvas (500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);



}
function modelloaded() {
    console.log("posenet is intialized");

}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        console.log("nose x= ",nosex," nose y=", nosey);
    }
}
function draw() {
    image(video, 0, 0, 500, 500);
    fill("red");
    console.log("draw"+ "nosex - " + nosex); 
    console.log("draw"+ "nosey - " + nosey); 
    image(nose_image,nosex-110,nosey,60,60);


}

function snapshot() {
    save("filter.png")
}
