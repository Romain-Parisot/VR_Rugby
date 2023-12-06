document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const overlayText = document.querySelectorAll('.pauseTimer');

    let countdown = 4;
    let timer;

    video.addEventListener('loadedmetadata', function() {
        startTimer();
    });

    function startTimer() {
        setTimeout(() => {
        clearInterval(timer);
        countdown = 4;
        console.log(overlayText);
        video.pause();
        overlayText.forEach(el => {
            el.classList.toggle('hide');
            let countdownValue = document.createTextNode(countdown);
            el.appendChild(countdownValue);            
        });

        timer = setInterval(() => {
            countdown -= 1;
            if (countdown >= 0) {
                overlayText.forEach(el => {
                    el.textContent = '';
                    let countdownValue = document.createTextNode(countdown);
                    el.appendChild(countdownValue);
                    console.log(countdown);
                });
            } else {
            clearInterval(timer);
            overlayText.forEach(el => {
                el.classList.toggle('hide');           
            });
            video.play();
            }
        }, 1000);
        }, 5000);
    }
});


function dpNone(){
    var entity = document.querySelector('#playButton');
    entity.classList.add('hide');
}