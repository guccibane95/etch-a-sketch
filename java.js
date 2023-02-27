let color = 'black'

function populateBoard(size){
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`
    let total= size*size

    for (let i=0; i<total; i++) {
        let square=document.createElement("div");
        square.style.border= "1px solid black";
        square.addEventListener('mouseover', colorSquare)
        board.insertAdjacentElement('beforeend', square)
    }
}

function colorSquare(){
    if (color==="random"){
        this.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`
    } else {
        this.style.backgroundColor=color
    }

}


function changeSize(input){
    if (input >=2 && input <=100){
        populateBoard(input)
    } else {
        console.log("error")
    }
}

function changeColor(newColor){
    color=newColor
}

function reset(){
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor="white")
    }