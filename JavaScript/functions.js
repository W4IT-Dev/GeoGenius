function start() {
    rightAnswer = null;
    triesLeft = 3;
    correct = streak = 0;
    update();
    newFlag();
    startScreen.style.display = 'none';
    game.style.display = 'block';
    answerBtns[0].focus();
}

function help() {
    Help.style.top = '40px';
    document.querySelector('#invisBtn').focus();
}

function newFlag() {
    //Set vars
    let avaiableFlags = flags;
    rightAnswer = avaiableFlags[parseInt(Math.random() * avaiableFlags.length - 1)];
    console.log(rightAnswer)

    //Loop over buttons
    answerBtns.forEach(button => {
        do {
            randomNum = parseInt(Math.random() * avaiableFlags.length)

        } while (avaiableFlags[randomNum].name === rightAnswer.name)
        button.innerText = avaiableFlags[randomNum].name;
        avaiableFlags.splice(avaiableFlags, 1);
    });
    //Set right answer's informations to DOM
    afaff = parseInt(Math.random() * 4);
    console.log(afaff)
    answerBtns[afaff].innerText = rightAnswer.name;
    flag.src = rightAnswer.flag;
}

function checkAnswer() {
    if (document.activeElement.innerText !== rightAnswer.name) {
        streak = 0;
        triesLeft--;
        if(triesLeft === 0) return gameOver();

    } else {
        correct++;
        streak++;
    }
    newFlag();
    update();
}

function update() {
    triesLeftP.innerText = triesLeft;
    correctP.innerText = correct;
    streakP.innerText = streak;
}

function gameOver(){
    gameOverScreen.style.display = 'flex';
    retryBtn.focus();
}


function nav(move, elems) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll(elems);
    const targetElement = items[next];
    if (move === 1 && currentIndex == items.length - 1) return items[0].focus();
    if (move === -1 && currentIndex == 0) return items[items.length - 1].focus();
    targetElement.focus();
}