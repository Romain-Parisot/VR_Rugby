const video = document.querySelector('#video');

function EventVideo() {
    video.pause();
}

setInterval(EventVideo, 3000);