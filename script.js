function playAudio(src) {
    let audio = new Audio(src);
    audio.play();
}

const audio = document.getElementById('bgm');
const btn = document.getElementById('bgm-control');
btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '❚❚';
    } else {
        audio.pause();
        btn.innerHTML = '▶︎';
    }
});
