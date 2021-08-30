function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
//onclick
const white = document.getElementById("default");
white.onclick = makeDefault;

function makeDefault() {
    document.body.style.backgroundColor = 'white';
}

const green = document.getElementById('greenButton');
green.onclick = function () {
    document.body.style.backgroundColor = 'green';
}
//event lissener
const makeGoldenRod = document.getElementById('goldenRod');
makeGoldenRod.addEventListener('click', goldenrod);

function goldenrod() {
    document.body.style.backgroundColor = 'goldenRod';
}

const makeBlue = document.getElementById('blue');
makeBlue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightBlue';
})

//direct
document.getElementById('coral').addEventListener('click', function () {
    document.body.style.backgroundColor = 'coral';
})

//section 2 on click paragraph
function paragraph() {
    document.getElementById("para").innerText="This is made With JS";
}

document.getElementById("updateName").addEventListener('click', function (){
    const inputValue = document.getElementById("name1");
    document.getElementById("para2").innerText = inputValue.value;
    inputValue.value = '';
})