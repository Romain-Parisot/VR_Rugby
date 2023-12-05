document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const overlayText = document.querySelectorAll('#overlayText');
  
    let countdown = 4;
    let timer;
  
    video.addEventListener('loadedmetadata', function() {
      startTimer();
    });
  
    function startTimer() {
      setTimeout(() => {
        clearInterval(timer);
        countdown = 4;
  
        overlayText.forEach(el => {
            el.setAttribute('visible', 'true');
        });
        overlayText.forEach(el => {
            el.setAttribute('text', {
                value: countdown,
                color: 'white',
                align: 'center',
              });
        })
  
        timer = setInterval(() => {
          countdown -= 1;
          if (countdown >= 0) {
            overlayText.setAttribute('text', { value: countdown });
          } else {
            clearInterval(timer);
            overlayText.setAttribute('visible', 'false');
            video.play();
          }
        }, 1000);
      }, 5000);
    }
  });
  