const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor(){
    let red = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)

    let color = `rgb(${red},${blue},${green})`

    body.style.backgroundColor = color;
    // body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}