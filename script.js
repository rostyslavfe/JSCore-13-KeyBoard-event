let color = document.querySelector('.color');
let images = document.querySelector('.images');
let square = document.querySelector('.square');
let rectangle = document.querySelector('.rectangle')

color.addEventListener('click', function(){
    square.style.display = 'flex'
})
function changeColor(){
    document.body.style.backgroundColor = event.target.style.backgroundColor
}
color.addEventListener('dblclick', function(){
    square.style.display = 'none'
    document.body.style.backgroundColor = 'white'
});
images.addEventListener('click', function(){
    rectangle.style.display = 'flex'
})
function changeImage(){
    document.body.style.backgroundImage = event.target.style.backgroundImage
}
images.addEventListener('dblclick', function(){
    rectangle.style.display = 'none'
    document.body.style.backgroundImage = 'none'
});