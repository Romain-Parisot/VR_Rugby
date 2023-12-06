document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const overlayText = document.querySelector('.pauseTimer');
    const messageChoose = document.querySelector('.messageChoose');
    const messageOption1 = document.querySelector('.messageOption1');
    const messageOption2 = document.querySelector('.messageOption2');

    let countdown = 4;
    let timer;
    let hasRun = false;

    video.addEventListener('play', function() {
        if (!hasRun) {
            hasRun = true;
            startTimer();
        }
    });

    video.addEventListener('ended', function() {
        let element = document.querySelector('.scoreScreen');
        element.classList.remove('hide');
    });

    function startTimer() {
        setTimeout(() => {
        clearInterval(timer);
        countdown = 4;
        video.pause();
        messageChoose.classList.toggle('hide');
        messageOption1.classList.toggle('hide');
        messageOption2.classList.toggle('hide');

        let chooseOptionValue = document.createTextNode("Choisissez une option:");
        let option1 = document.createTextNode("1. Faire la passe a gauche");
        let option2 = document.createTextNode("2. Traversez la defense");

        messageChoose.appendChild(chooseOptionValue);
        messageOption1.appendChild(option1);
        messageOption2.appendChild(option2);

        overlayText.classList.toggle('hide');
        let countdownValue = document.createTextNode(countdown);
        overlayText.appendChild(countdownValue);

        timer = setInterval(() => {
            countdown -= 1;
            if (countdown >= 0) {
                overlayText.textContent = '';
                let countdownValue = document.createTextNode(countdown);
                overlayText.appendChild(countdownValue);
            } else {
            clearInterval(timer);
            overlayText.classList.toggle('hide');
            messageChoose.classList.toggle('hide');
            messageOption1.classList.toggle('hide');
            messageOption2.classList.toggle('hide');
            video.play();
            }
        }, 1000);
        }, 5000);
    }
});

document.addEventListener('click', function() {
    let element = document.querySelector('#playButton');
    element ? element.remove() : null;
});