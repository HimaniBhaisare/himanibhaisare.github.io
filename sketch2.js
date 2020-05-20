let stars = [];
let speed;

function setup() {
	createCanvas(windowWidth, windowHeight);


	for (let i = 0; i < 800; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(0);
	speed = 50;

	translate(width / 2, height / 2);
	for (let i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
}
