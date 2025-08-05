function copiarPix() {
  const chave = document.getElementById("pix-key").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}

function entrarEmTelaCheia() {
  const elem = document.getElementById("live-player-container");
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {
      alert("Não foi possível ativar a tela cheia neste dispositivo.");
    });
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else {
    alert("Tela cheia não suportada pelo seu navegador.");
  }
}
