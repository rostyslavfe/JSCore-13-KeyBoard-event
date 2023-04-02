let all = document.querySelectorAll('div');
let space = document.querySelector('.lower');
let shiftLeft = document.getElementById('left');
let shiftRight = document.getElementById('right');
let enter = document.querySelector('.enter')

function keydoard(){
    window.addEventListener('keydown', function(event){
        //loop
        for(let i=0; i<all.length; i++){
            if(all[i].innerText.toLowerCase() == event.key.toLowerCase()){
                all[i].style.backgroundColor = 'gray'
            }
        }
        //key "Space"
        if(event.keyCode === 32){
            space.style.backgroundColor = 'gray'
            window.addEventListener('keyup', function(){
                space.style.backgroundColor = 'white'
            })
        }
        //keys "Shifts"
        if(event.shiftKey === true && event.location === 1){
            shiftLeft.style.backgroundColor = 'gray'
            shiftRight.style.backgroundColor = 'white'
        }
        if(event.shiftKey === true && event.location === 2){
            shiftLeft.style.backgroundColor = 'white'
            shiftRight.style.backgroundColor = 'gray'
        }
        //Enter
        if(event.keyCode === 13){
            document.querySelector('input').value = ''
        }
    });
    window.addEventListener('keyup', function(event){
        for(let i=0; i<all.length; i++){
            if(all[i].innerText.toLowerCase() == event.key.toLowerCase()){
                all[i].style.backgroundColor = 'white'
            }
        }
    });
}
keydoard()

console.log(enter);

// window.addEventListener('keydown', function(event){
//     console.log(event)
// })
