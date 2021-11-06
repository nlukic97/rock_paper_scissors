(function(){
    let savedScore = localStorage.getItem('saved_score')
    if(savedScore != null){
        document.querySelector('.score').innerText = savedScore
    }
    
    /** Score sheet (the user's choice is marked with 'title',
     * while the outcome it has against the computer is 
     * within the same object this 'title' is in
     * (computerChouce: outcome).
     * */
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
   
    
    
    /** ------------------ Event listeners for user selections --------------- */
    //paper
    document.querySelector('#paper').addEventListener('click',function(){
        play(this)
    })
    
    //scissors click
    document.querySelector('#scissors').addEventListener('click',function(){
        play(this)
    })
    
    //rock
    document.querySelector('#rock').addEventListener('click',function(){
        play(this)
    })




    /** --------------- Methods --------------- */

    // Called upon click of an option. Calls the remaining functions
    function play(clickedBtn){
        let choice = clickedBtn.getAttribute('data-id')
        document.querySelector('.user-choice img').src=`./images/custom-svgs/${choice}.svg` //display of the choice the user made
        document.body.classList.add('choice-made') //displaying the element showing the two choices made, and hiding the three options
        
        setTimeout(function(){
            let computer = computerChoice()
            document.querySelector('.computer-choice img').src = `./images/custom-svgs/${computer}.svg` //display computer choice
            document.querySelector('.computer-choice').classList.add('choice-made') //showing the image, and hiding the blanc circle placeholder

            let result = getResult(choice, computer)
            console.log(result);
        },400)
    }


    // get a random choice from the computer
    function computerChoice(){
        return ['rock','paper','scissors'][Math.floor(Math.random() * 3)]; //gets a random choice - rock, paper or scissors
    }


    // compare the results for the two choices, updating the score, and returning the phrase of the game outcome to be printed to the DOM
    function getResult(userChoice, computerChoice){
        let outcome = getPoints(userChoice,computerChoice)
        updateScore(outcome)

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

    
    // Get number from the 'points' object scoresheet to check if the user has won (1), lost(-1), or tied(0) against the computer
    function getPoints(player1, player2){
        for(let i = 0; i < points.length; i++){
            if(points[i].title === player1){
                return points[i][player2]
            }
        }    
    }
    
    
    // update score in the DOM and in local storage
    function updateScore(outcome){
        let curr = parseInt(document.querySelector('.score').innerText)
        let result = curr + outcome

        document.querySelector('.score').innerText = result
        localStorage.setItem('saved_score',result)   
    }
    

    // Resets the game to the starting point
    function resetGame(){
        document.body.classList.remove('choice-made')
        document.querySelector('.computer-choice img').src = ''
        document.querySelector('.computer-choice').classList.remove('choice-made')
    }

    

})()