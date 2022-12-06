let play = document.querySelector('.bx-play');
let vinylAlbum = document.querySelector('.vinyl_album');
let vinylTexture = document.querySelector('.vinyl_texture');
var icons_for_hide = document.getElementById("icons_for_hide");
play.addEventListener('click', function () {
  if (vinylAlbum.style.animationPlayState === 'paused') {
    vinylAlbum.style.animationPlayState = 'running';
    vinylTexture.style.animationPlayState = 'running';
  } else {
    vinylAlbum.style.animationPlayState = 'paused';
    vinylTexture.style.animationPlayState = 'paused';
  }
});
icons_for_hide.onclick = function offset(){
  icons_for_hide.style.top='800px';


}
