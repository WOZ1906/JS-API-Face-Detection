let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
canvas = createCanvas(480,360);
video = createCapture (VIDEO);
video.size(width, height);

const faceOption = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    minConfidence: 0.5
};

faceapi = ml5.faceApi(video, faceOptions,);

}

function faceReady () {
    faceapi.detect(gotFaces);
}

function gotFaces(error, result) {


}

function draw() {

}