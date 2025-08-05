function copiarPix() {
  const chave = document.getElementById("pix-key").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}

function entrarEmTelaCheia() {
  const elem = document.getElementById("live-player-container");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
}
