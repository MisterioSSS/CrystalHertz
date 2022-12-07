let play = document.querySelector('#bx-play');
let vinylAlbum = document.querySelector('.vinyl_album');
let vinylTexture = document.querySelector('.vinyl_texture');
let icons = document.querySelectorAll('.icon');

play.addEventListener('click', function () {
  document.querySelector('.okno').style.transform = 'translateX(0)';
  document.querySelector('.okno').classList.add('open');
  if (vinylAlbum.style.animationPlayState === 'paused') {
    vinylAlbum.style.animationPlayState = 'running';
    vinylTexture.style.animationPlayState = 'running';
  } else {
    vinylAlbum.style.animationPlayState = 'paused';
    vinylTexture.style.animationPlayState = 'paused';
  }
});

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icons_for_hide.style.top = '800px';
  });
});
