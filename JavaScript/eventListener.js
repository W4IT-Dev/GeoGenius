//Key Events
document.addEventListener('keydown', e => {
    if (e.key == 'ArrowDown') {
        e.preventDefault();
        nav(1, '.' + document.activeElement.className);
    }

    if (e.key == 'ArrowUp') nav(-1, '.' + document.activeElement.className);

    if (game.style.display == 'block') {
        if (e.key == 'Backspace') {
            e.preventDefault();
            let quit = confirm("Are you sure to quit this session?\nYour progress won't be saved!");
            if (quit) {
                game.style.display = 'none';
                startScreen.style.display = 'block';
                startBtn.focus();
            }
        }
    }
});

//Button Events
startBtn.addEventListener('click', () => {
    start();
});

helpBtn.addEventListener('click', () => {
    help();
});

retryBtn.addEventListener('click', ()=>{
    gameOverScreen.style.display = 'none'
    start();
})

document.querySelector('#invisBtn').addEventListener('click', () => {
    Help.style.top = '500px';
    helpBtn.focus();
});

answerBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        checkAnswer();
    });
});