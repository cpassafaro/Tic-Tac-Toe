
//get elements
let boxes = document.querySelectorAll('.box');
console.log(boxes)
//array keeping boxes for players
let player1Boxes = [];
let player2Boxes =[];

//translated array
let p1Final =[];
let p2Final =[];

//arrays for winning combinations
let winningCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]



//consturcotr for players
class Player {
    constructor(color){
        this.color = color;
        this.active = true;
    }
}

//player information
const player1 = new Player('red');
const player2 = new Player('blue')
player1.active = true;
player2.active = false;

function setActions(){
    for(let i = 0; i< boxes.length;i++){
        boxes[i].addEventListener('click', e => 
        changeClass(boxes[i])
    )}
}
setActions();

function changePlayer(){
    if(player1.active == true){
        player1.active = false
        player2.active = true
    }else if(player2.active == true){
       player2.active = false
        player1.active = true
    }
}

function changeClass(element){
    if(element.classList.contains('red') || element.classList.contains('blue')){
        console.log('pick a different box')
    }else if(player1.active == true){
       element.classList.add('red');
       player1Boxes.push(element)
       changePlayer()
    }else if(player2.active == true){
        element.classList.add('blue')
        player2Boxes.push(element)
        changePlayer()
    }else{
        console.log('error')
    }
}


//functin to convert saved data from players arrays into a simple data structure
function transformDataSet(array, array2){
    for(let i = 0; i <array.length; i++){
        let values = array[i].dataset.value;
        // console.log(values)
        array2.push(values)
        // console.log(array2)
    }
    return array2
}




// check the classlist of the boxes to see if there are three in a row 
function checkForWinner(){
    //get the arrays of each data value in each players array
    transformDataSet(player1Boxes, p1Final)
    transformDataSet(player2Boxes, p2Final)
    console.log(p1Final)
    console.log(p2Final)
    //loop through winning array
    // for(let i = 0; i <winningCombinations.length;i++){
    // //second loop to loop through each array element
    //     for(let j =0; i<winningCombinations[i].length;i++){
    //         //now looping through elements in each index of the array
    //         //check to see if each element in each index have the same classlist
    //         if (p1Final.contains == winningCombinations[i][j]){

    //         }
    //     }
    // }
}


