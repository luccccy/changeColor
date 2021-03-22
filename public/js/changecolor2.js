//color array
let colors = ['red', 'blue', 'orange']

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function () {
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById('container')
    container.style.backgroundColor = randomColor;
})