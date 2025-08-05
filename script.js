function copiarPix() {
  const chave = document.getElementById("pix-key").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}
