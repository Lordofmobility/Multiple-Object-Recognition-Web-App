img = ""
status = ""

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status: Object Detected"
}

function modelLoaded() {
    console.log("Object Detector Loaded");
    status = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
}

function preload() {
    img = loadImage("dog_cat.jpg")
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#0000FF")
    text("Dog", 45, 75)
    noFill()
    stroke("#0000FF")
    rect(40, 60, 350, 350)

    fill("#0000FF")
    text("Cat", 300, 90)
    noFill()
    stroke("#0000FF")
    rect(295, 75, 275, 315)

    fill("#0000FF")
    text("Bowl", 250, 325)
    noFill()
    stroke("#0000FF")
    rect(240, 310, 150, 100)
}