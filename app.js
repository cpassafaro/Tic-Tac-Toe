
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
       checkForWinner()
    }else if(player2.active == true){
        element.classList.add('blue')
        player2Boxes.push(element)
        changePlayer()
        checkForWinner()
    }else{
        console.log('error')
    }
}

//functin to convert saved data from players arrays into a simple data structure
function transformDataSet(array, array2){
    for(let i = 0; i <array.length; i++){
        let values = array[i].dataset.value;
        array2.push(values)
    }
    return array2
}



// check the classlist of the boxes to see if there are three in a row 
function checkForWinner(){
    //get the arrays of each data value in each players array
    transformDataSet(player1Boxes, p1Final)
    transformDataSet(player2Boxes, p2Final)
    let p1 = p1Final.map(x => parseInt(x))
    let p2= p2Final.map(x => parseInt(x))

    // loop through winning array
    for(let i = 0; i <winningCombinations.length;i++){
       //
        let checker = (arr, target) => target.every(v => arr.includes(v));
        // console.log(checker(p1, winningCombinations[i]))
        // console.log(checker(p2, winningCombinations[i]))

        if(checker(p1, winningCombinations[i]) == true){
            console.log("Player 1 winner")    
        }else if (checker(p2, winningCombinations[i]) == true){
            console.log("Player 2 winner")
        }
    }
}



