// Função para copiar o Pix para a área de transferência
function copiarPix() {
  const pixKey = document.getElementById('pix-key').innerText;
  navigator.clipboard.writeText(pixKey).then(() => {
    alert('Chave Pix copiada: ' + pixKey);
  }, () => {
    alert('Falha ao copiar a chave Pix.');
  });
}

// Função para entrar em tela cheia (desktop apenas)
function entrarEmTelaCheia() {
  const player = document.getElementById('live-player-container');
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.mozRequestFullScreen) { /* Firefox */
    player.mozRequestFullScreen();
  } else if (player.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) { /* IE/Edge */
    player.msRequestFullscreen();
  }
}
