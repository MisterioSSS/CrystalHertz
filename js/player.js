const audio = document.getElementById('audio');
const playBtn = document.getElementById('btnPlay');
const playIcon = playBtn.querySelector('i');
const vinylAlbum = document.querySelector('.vinyl_album');
const vinylTexture = document.querySelector('.vinyl_texture');
const iconsPanel = document.getElementById('icons_for_hide');
const repeatBtn = document.querySelector('.icon[aria-label="Повтор"]');

// Клик по play: реальное воспроизведение / пауза
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// UI обновляется по событиям audio, а не по клику —
// так иконка и aria-label не разъедутся, если audio.play() упадёт
audio.addEventListener('play', () => {
  playBtn.setAttribute('aria-label', 'Пауза');
  playIcon.classList.remove('bx-play');
  playIcon.classList.add('bx-pause');
  vinylAlbum.style.animationPlayState = 'running';
  vinylTexture.style.animationPlayState = 'running';
});

audio.addEventListener('pause', () => {
  playBtn.setAttribute('aria-label', 'Воспроизвести');
  playIcon.classList.remove('bx-pause');
  playIcon.classList.add('bx-play');
  vinylAlbum.style.animationPlayState = 'paused';
  vinylTexture.style.animationPlayState = 'paused';
});

// Ошибка загрузки: mp3 не нашёлся / браузер не поддерживает формат
audio.addEventListener('error', () => {
  playBtn.setAttribute('aria-label', 'Трек не загрузился');
  console.error('Не удалось загрузить трек:', audio.currentSrc);
});

// Кнопка «Повтор»
if (repeatBtn) {
  repeatBtn.addEventListener('click', () => {
    const isPressed = repeatBtn.getAttribute('aria-pressed') === 'true';
    repeatBtn.setAttribute('aria-pressed', String(!isPressed));
    audio.loop = !isPressed;
  });
}

// Скрытие панели при клике на иконки, КРОМЕ play
document.querySelectorAll('.icon').forEach((icon) => {
  if (icon.id === 'btnPlay') return;
  icon.addEventListener('click', () => {
    iconsPanel.style.top = '800px';
  });
});
