let play = document.querySelector('.bx-play');
let okno = document.querySelector('.okno');

play.addEventListener('click', function () {
  console.log('test');
  if (okno.style.animationPlayState === 'paused') {
    okno.style.animationPlayState = 'running';
  } else {
    okno.style.animationPlayState = 'paused';
  }
});
