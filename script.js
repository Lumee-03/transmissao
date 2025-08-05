function entrarEmTelaCheia() {
  const elem = document.getElementById("live-player-container");
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {
      alert("Não foi possível ativar a tela cheia neste dispositivo.");
    });
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  } else {
    alert("Tela cheia não suportada pelo seu navegador.");
  }
}
