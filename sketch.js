var mobils = [];
var balloons = [];
var total = 12;
var font;
var dp, bg;
var txt = "HAPPY BIRTHDAY";
var name = "FROGGYYYYY!!!";

function preload() {
	dp = loadImage("./img/froggyCircle.png");
	bg = loadImage("./img/leafBG.jpg");
	font = loadFont("./fonts/CuteMaple1.ttf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balloons.push(new Balloon());
	}
}

function draw() {

	image(bg, 0, 0, width, height);
	background(255, 255, 255, 100);


	push();
	var imgX = width / 2;
	var imgY = height / 2;

	translate(imgX + (-mouseX + width / 2) / 25, imgY + (-mouseY + height / 2) / 25);
	imageMode(CENTER);
	image(dp, 0, 0, 200, 200);

	noFill();
	stroke(0, 150);
	strokeWeight(10);
	ellipse(0, 0, 210, 210);
	pop();

	push();
	fill('rgba(242, 184, 204, 250)');
	stroke(20, 12, 36);
	strokeWeight(15);
	textFont(font);
	textSize(100);
	textAlign(CENTER);

	text(name, imgX + (mouseX - width / 2) / 25, imgY + 250 + (mouseY - height / 2) / 25);
	text(txt, imgX + (mouseX - width / 2) / 25, imgY - 200 + (mouseY - height / 2) / 25);
	pop();


	for (let i = 0; i < balloons.length; i++) {
		balloons[i].show();
		balloons[i].up();
		balloons[i].checkEdge()
		if (balloons[i].mouseHover()) {
			balloons.splice(i, 1);
		}
	}

	if (balloons.length < 3) {
		for (let i = 0; i < total; i++) {
			balloons.push(new Balloon());
		}
	}
}

function keyPressed() {
	if (key === 'z' || key === 'Z') {
		for (let i = 0; i < total; i++) {
			balloons.push(new Balloon());
		}
	}
}
