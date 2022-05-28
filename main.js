function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(590, 50, 70);
    circle(590, 75, 70);
    circle(325, 50, 70);
    circle(325, 25, 70);
    fill(0, 128, 0);
     stroke(0, 128, 0);
      rect(90, 40, 460, 20);

}

