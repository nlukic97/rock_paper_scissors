(function(){
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
    
    function getTitle(id){
        // the id is the same as the game title (0. rock, 1. paper, 2. scissors)
        return ['rock','paper','scissors'][id]
    }
    
    // Check if player 1 has won
    function getPoints(player1, player2){
        for(let i = 0; i < points.length; i++){
            if(points[i].title === player1){
                return points[i][player2]
            }
        }    
    }
    
    function checkResult(outcome){
        switch(outcome){
        case -1:
            return 'You lose';
            break;
        case 0:
            return 'Tie';
            break;
        case 1:
            return 'You win';
            break;
        }
    }
    
    function getRandomInt(){
        return Math.floor(Math.random() * 3); //0, 1, or 2
    }
    
    
    
    // Event listeners for user selections
    //paper
    document.querySelector('#paper').addEventListener('click',function(){
        let computerChoice = getRandomInt()
        let outcome = getPoints(getTitle(this.getAttribute('data-id')),getTitle(computerChoice))
        let result = checkResult(outcome)
        console.log(result);
    })
    
    //scissors click
    document.querySelector('#scissors').addEventListener('click',function(){
        let computerChoice = getRandomInt()
        let outcome = getPoints(getTitle(this.getAttribute('data-id')),getTitle(computerChoice))
        let result = checkResult(outcome)
        console.log(result);
    })
    
    //rock
    document.querySelector('#rock').addEventListener('click',function(){
        let computerChoice = getRandomInt()
        let outcome = getPoints(getTitle(this.getAttribute('data-id')),getTitle(computerChoice))
        let result = checkResult(outcome)
        console.log(result);
    })
})()