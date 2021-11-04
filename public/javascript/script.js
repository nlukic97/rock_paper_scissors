let points = [
    {
        title:'rock',
        rock:0,
        scissors:1,
        paper:-1
    },
    {
        title:'paper',
        rock:1,
        paper:0,
        scissors:-1,
    },
    {
        title:'scissors',
        rock:-1,
        paper:1,
        scissors:0,
    }
]

let player1 = 1
let player2 = 2

function getTitle(id){
    // the id is the same as the game title (0. rock, 1. paper, 2. scissors)
    return ['rock','paper','scissors'][id]
}

// Check if player 1 has won
function checkResult(player1, player2){
    for(let i = 0; i < points.length; i++){
        if(points[i].title === player1){
            return points[i][player2]
        }
    }
}

switch(checkResult( getTitle(player1) , getTitle(player2) )){
    case -1:
        console.log('You lose');
        break;
    case 0:
        console.log('Tie');
        break;
    case 1:
        console.log('You win');
        break;
}