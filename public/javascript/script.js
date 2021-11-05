(function(){
    let savedScore = localStorage.getItem('saved_score')
    if(savedScore != null){
        document.querySelector('.score').innerText = savedScore
    }


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

    
    // Check if player 1 has won
    function getPoints(player1, player2){
        for(let i = 0; i < points.length; i++){
            if(points[i].title === player1){
                return points[i][player2]
            }
        }    
    }
    
    function getPhrase(outcome){
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

    function updateScore(outcome){
        let curr = parseInt(document.querySelector('.score').innerText)
        let result = curr + outcome
        document.querySelector('.score').innerText = result
        localStorage.setItem('saved_score',result)

    }
    
    function computerChoice(){
        return ['rock','paper','scissors'][Math.floor(Math.random() * 3)]; //gets a random choice - rock, paper or scissors
    }

    function activate(userChoice){
        let outcome = getPoints(userChoice,computerChoice())
        updateScore(outcome)
        let result = getPhrase(outcome)
        console.log(result);
    }
    
    
    
    // Event listeners for user selections
    //paper
    document.querySelector('#paper').addEventListener('click',function(){
        activate(this.getAttribute('data-id'))
    })
    
    //scissors click
    document.querySelector('#scissors').addEventListener('click',function(){
        activate(this.getAttribute('data-id'))
    })
    
    //rock
    document.querySelector('#rock').addEventListener('click',function(){
        activate(this.getAttribute('data-id'))
    })
})()