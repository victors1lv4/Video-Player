let video = document.getElementById('video');
let play2 = document.getElementById('play2');
function rewind() {
    video.playbackRate -= 0.1;
}
function back() {
    video.currentTime -= 10;
}
function playAndPause() {
    if (video.paused) {
        video.play();
        play2.src = './black-24dp/1x/pause2.svg';
    } else {
        video.pause();
        play2.src = './black-24dp/1x/play3.svg';
    }
}
function stop() {
    video.pause();
    video.currentTime = 0;
}
function advance() {
    video.currentTime += 10;
}
function forward() {
    video.playbackRate += 0.1;
}
play.addEventListener('click', playAndPause);
