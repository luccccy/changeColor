//color array
let colors = ['red', 'green', 'blue'];

//get button
let button = document.getElementById('button')

//add event listener
button.addEventListener('click', function() {
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById('container')
    container.style.backgroundColor = randomColor;
})
























// const button = document.querySelector('button')
// const body = document.querySelector('body')
// //const colors = ['#00FFFF', 'F5F5DC', '#8B4513', '#8A2BE2', '#A52A2A', '#DC143C', '#FF8C00', 'D3D3D3', '#FF1439', '#FFFF00'];
// const colors = ['red', 'green', 'blue']
//
// body.style.backgroundColor = 'violet'
// button.addEventListener("click", changeBackground)
//
// function changeBackground() {
//     const colorIndex = parseInt(Math.random()*colors.length);
//     body.style.backgroundColor= colors[colorIndex];
// }
